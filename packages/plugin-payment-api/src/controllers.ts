import { getSubdomain } from '@erxes/api-utils/src/core';
import { Router } from 'express';
import * as QRCode from 'qrcode';

import { PAYMENT_KINDS } from './constants';
import { generateModels } from './connectionResolver';
import redisUtils from './redisUtils';

const router = Router();

router.post('/checkInvoice', async (req, res) => {
  const { invoiceId } = req.body;

  const status = await redisUtils.getInvoiceStatus(invoiceId);

  if (status === 'paid') {
    redisUtils.removeInvoice(invoiceId);
  }

  return res.json({ status });
});

router.get('/gateway', async (req, res) => {
  const { params } = req.query;

  const data = JSON.parse(
    Buffer.from(params as string, 'base64').toString('ascii')
  );

  const subdomain = getSubdomain(req);
  const models = await generateModels(subdomain);

  const filter: any = {};

  if (data.paymentIds) {
    filter._id = { $in: data.paymentIds };
  }

  const payments = await models.Payments.find(filter).sort({
    type: 1
  });

  res.render('index', {
    title: 'Payment gateway',
    payments,
    invoiceData: data,
    prefix: subdomain === 'localhost' ? '' : `/gateway`
  });
});

router.post('/gateway', async (req, res) => {
  const { params } = req.query;

  const data = JSON.parse(
    Buffer.from(params as string, 'base64').toString('ascii')
  );

  const subdomain = getSubdomain(req);
  const models = await generateModels(subdomain);

  const prefix = subdomain === 'localhost' ? '' : `/gateway`;

  const filter: any = {};

  if (data.paymentIds) {
    filter._id = { $in: data.paymentIds };
  }

  const payments = await models.Payments.find(filter).sort({
    type: 1
  });

  const selectedPaymentId = req.body.selectedPaymentId;

  const paymentsModified = payments.map(p => {
    if (p._id === selectedPaymentId) {
      return {
        ...(p.toJSON() as any),
        selected: true
      };
    }

    return p.toJSON();
  });

  let invoice = await models.Invoices.findOne({ _id: data._id });

  if (invoice && invoice.status === 'paid') {
    return res.render('index', {
      title: 'Payment gateway',
      payments: payments,
      invoiceData: data,
      invoice,
      prefix
    });
  }

  if (
    invoice &&
    invoice.status !== 'paid' &&
    invoice.selectedPaymentId !== selectedPaymentId
  ) {
    await models.Invoices.updateInvoice(invoice._id, { selectedPaymentId });

    invoice = await models.Invoices.findOne({ _id: data._id });
  }

  if (!invoice) {
    invoice = await models.Invoices.createInvoice({
      ...data,
      selectedPaymentId
    });
  }

  try {
    const selectedPayment = paymentsModified.find(p => p.selected);

    if (selectedPayment.kind === PAYMENT_KINDS.SOCIAL_PAY && !invoice.phone) {
      invoice.apiResponse.socialPayQrCode = await QRCode.toDataURL(
        invoice.apiResponse.text
      );
    }

    redisUtils.updateInvoiceStatus(invoice._id, 'pending');

    res.render('index', {
      title: 'Payment gateway',
      payments,
      invoiceData: data,
      invoice,
      prefix
    });
  } catch (e) {
    res.render('index', {
      title: 'Payment gateway',
      payments,
      invoiceData: data,
      error: e.message,
      prefix
    });
  }
});

export default router;
