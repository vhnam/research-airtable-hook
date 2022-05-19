import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from '../../shared/dtos/Product';

import { ProductEntity } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productsRepository: Repository<ProductEntity>,
  ) {}

  findAll(): Promise<ProductEntity[]> {
    return this.productsRepository.find();
  }

  create(product: Product): Promise<ProductEntity> {
    const newProduct = new ProductEntity();
    newProduct.name = product.name;
    newProduct.price = product.price;

    return this.productsRepository.save(newProduct);
  }
}
