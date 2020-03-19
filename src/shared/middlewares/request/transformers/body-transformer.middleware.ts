import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';
import { NextFunction } from 'express';
import { Request, Response } from 'express-serve-static-core';

export function RequestBodyTransformer<T, U extends ClassType<T>>(DTOClass: U) {
  return (req: Request, _: Response, next: NextFunction) => {
    req.body = plainToClass(DTOClass, req.body);
    next();
  };
}
