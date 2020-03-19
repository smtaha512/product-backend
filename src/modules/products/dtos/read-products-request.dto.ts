import { Expose } from 'class-transformer';
import { IsNumberString, IsOptional, IsString } from 'class-validator';
import { ParamsDictionary } from 'express-serve-static-core';

export class ReadProductsRequestDto implements ParamsDictionary {
  [key: string]: string;
  @Expose() @IsOptional() @IsString() createdAt: string;
  @Expose() @IsOptional() @IsString() maxCreatedAt: string;
  @Expose() @IsOptional() @IsString() minCreatedAt: string;
  @Expose() @IsOptional() @IsString() name: string;
  @Expose() @IsOptional() @IsNumberString() price: string;
}
