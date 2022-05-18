import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class Product {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsBoolean()
  isActive?: boolean = true;
}
