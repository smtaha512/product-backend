import { validateOrReject } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { validationResponseBodyFactory } from './validation-response-body';

export async function QueryParamsValidator(req: Request, res: Response, next: NextFunction) {
  try {
    await validateOrReject(req.query);
    next();
  } catch (error) {
    res.status(400).json(validationResponseBodyFactory(error));
  }
}
