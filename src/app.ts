import bodyParser from 'body-parser';
import express from 'express';
import { createConnection } from 'typeorm';

import { environment } from './environments/environtment';
import { ProductsRouter } from './modules/products/controllers/products.controller';

const promisedApp = createConnection(environment.database).then(_ => {
  const app = express();

  app.set('port', environment.port);

  //   Middlewares
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/products', ProductsRouter);

  //   Fallback route
  app.use('*', (_, res) => res.status(404).json({ message: 'Resource Not Found', status: 404 }));

  return app;
});

export { promisedApp as app };
