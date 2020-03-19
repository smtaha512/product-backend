import express from 'express';

import { RequestBodyTransformer } from '../../../shared/middlewares/request/transformers/body-transformer.middleware';
import { QueryParamsTransformer } from '../../../shared/middlewares/request/transformers/query-params-transformer.middleware';
import { RequestBodyValidator } from '../../../shared/middlewares/request/validators/body-validator.middleware';
import { QueryParamsValidator } from '../../../shared/middlewares/request/validators/query-params-validator.middleware';
import { CreateProductsRequestDto } from '../dtos/create-product-request.dto';
import { ReadProductsRequestDto } from '../dtos/read-products-request.dto';
import { create, read } from '../services/products.service';

const ProductsRouter = express.Router();

ProductsRouter.post('/', RequestBodyTransformer(CreateProductsRequestDto), RequestBodyValidator, create);
ProductsRouter.get('/', QueryParamsTransformer(ReadProductsRequestDto), QueryParamsValidator, read);

export { ProductsRouter };
