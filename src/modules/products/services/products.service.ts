import { Request, Response } from 'express-serve-static-core';
import { Between, LessThanOrEqual, MoreThanOrEqual, getRepository } from 'typeorm';

import { CreateProductsRequestDto } from '../dtos/create-product-request.dto';
import { ReadProductsRequestDto } from '../dtos/read-products-request.dto';
import { ProductsEntity } from '../entities/products.entity';

export async function create(req: Request<undefined, ProductsEntity, CreateProductsRequestDto>, res: Response<ProductsEntity>) {
  const productsRepo = getRepository(ProductsEntity);
  const { name, price } = req.body;
  const product = await productsRepo.save(new ProductsEntity({ name, price }));
  return res.json(product);
}

export async function read(req: Request<ReadProductsRequestDto, ProductsEntity[], undefined>, res: Response<ProductsEntity[]>) {
  const productsRepo = getRepository(ProductsEntity);
  const { createdAt, name, price, maxCreatedAt, minCreatedAt } = req.params;
  const numberedPrice = +price;
  const products = await productsRepo.find({
    ...(name ? { name } : {}),
    ...(price ? { price: numberedPrice } : {}),
    ...(minCreatedAt ? { createdAt: MoreThanOrEqual(minCreatedAt) } : {}),
    ...(maxCreatedAt ? { createdAt: LessThanOrEqual(maxCreatedAt) } : {}),
    ...(maxCreatedAt && minCreatedAt ? { createdAt: Between(minCreatedAt, maxCreatedAt) } : {}),
    ...(createdAt ? { createdAt } : {})
  });
  return res.send(products);
}
