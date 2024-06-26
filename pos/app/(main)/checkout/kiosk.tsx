"use client"

import PaymentSheet from "@/modules/checkout/components/paymentType/paymentSheet"
import TotalAmount from "@/modules/checkout/components/totalAmount/totalAmount.kiosk"
import useHandleOrderId from "@/modules/orders/hooks/useHandleOrderId"
import OrderDetail from "@/modules/orders/OrderDetail"

import HandleOrder from "./components/HandleOrder.kiosk"
import Items from "./components/Items.kiosk"

const Kiosk = () => {
  useHandleOrderId()
  return (
    <>
      <OrderDetail>
        <Items />
        <div className="grid gap-x-4 gap-y-6 pb-4 pt-2 flex-none">
          <div className="col-span-2 flex items-start justify-between text-base font-extrabold">
            <span>Нийт дүн:</span>
            <TotalAmount className="text-primary font-black text-lg" />
          </div>
          <HandleOrder />
        </div>
      </OrderDetail>
      <PaymentSheet />
    </>
  )
}

export default Kiosk
