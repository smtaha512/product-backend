import { ValidationError } from 'class-validator';

export function validationResponseBodyFactory(validationErrors: ValidationError[]) {
  return { message: 'Validation failed', status: 404, errors: validationErrors };
}
