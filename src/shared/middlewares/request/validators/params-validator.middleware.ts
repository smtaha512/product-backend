import { validateOrReject } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

import { validationResponseBodyFactory } from './validation-response-body';

export async function ParamsValidator(req: Request, res: Response, next: NextFunction) {
  try {
    await validateOrReject(req.params);
    next();
  } catch (error) {
    res.status(404).json(validationResponseBodyFactory(error));
  }
}
