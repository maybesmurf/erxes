import { createProxyMiddleware, fixRequestBody } from 'http-proxy-middleware';
import { ErxesProxyTarget } from './targets';
import * as dotenv from 'dotenv';
import { apolloRouterPort } from '../apollo-router';
import { Express } from 'express';
dotenv.config();

const { NODE_ENV } = process.env;

const onProxyReq = (proxyReq, req: any) => {
  proxyReq.setHeader('hostname', req.hostname);
  proxyReq.setHeader('userid', req.user ? req.user._id : '');
  fixRequestBody(proxyReq, req);
};

const forbid = (_req, res) => {
  res.status(403).send();
};

export async function applyProxiesCoreless(
  app: Express,
  targets: ErxesProxyTarget[],
) {
  app.use(
    '^/graphql',
    createProxyMiddleware({
      pathRewrite: { '^/graphql': '/' },
      target: `http://127.0.0.1:${apolloRouterPort}`,
      onProxyReq,
    }),
  );

  for (const target of targets) {
    const path = `^/pl(-|:)${target.name}`;

    app.use(`${path}/rpc`, forbid);

    app.use(
      path,
      createProxyMiddleware({
        pathRewrite: { [path]: '/' },
        target: target.address,
        onProxyReq,
      }),
    );
  }
}

// this has to be applied last, just like 404 route handlers are applied last
export function applyProxyToCore(app: Express, targets: ErxesProxyTarget[]) {
  const core = targets.find((t) => t.name === 'core');

  if (!core) {
    throw new Error('core service not found');
  }
  app.use('/rpc', forbid);
  app.use(
    '/',
    createProxyMiddleware({
      target:
        NODE_ENV === 'production' ? core.address : 'http://localhost:3300',
      onProxyReq,
    }),
  );
}
