import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';
import { NextFunction } from 'express';
import { ParamsDictionary, Request, Response } from 'express-serve-static-core';

export function ParamsTransformer<T extends ClassType<ParamsDictionary>>(DTOClass: T) {
  return (req: Request, _: Response, next: NextFunction) => {
    req.params = plainToClass(DTOClass, req.params);
    next();
  };
}
