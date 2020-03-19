import { IsString, IsNumber, Min, MinLength } from 'class-validator';

export class CreateProductsRequestDto {
  @IsString() @MinLength(3) name: string;
  @IsNumber() @Min(0) price: number;
}
