import { Body, Controller, Post } from '@nestjs/common';

import { Product } from '../../shared/dtos/Product';

import { ProductEntity } from './products.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() body: Product): Promise<ProductEntity> {
    return this.productsService.create(body);
  }
}
