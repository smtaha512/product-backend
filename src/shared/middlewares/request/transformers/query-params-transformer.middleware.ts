import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';
import { NextFunction, Request, Response } from 'express';

export function QueryParamsTransformer<T, U extends ClassType<T>>(DTOClass: U) {
  return (req: Request, _: Response, next: NextFunction) => {
    req.query = plainToClass(DTOClass, req.query);
    next();
  };
}
