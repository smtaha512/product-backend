import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class ProductsEntity {
  @PrimaryGeneratedColumn('uuid') _id: string;

  @CreateDateColumn() createdAt: string;

  @Column('varchar') name: string;

  @Column('decimal') price: number;

  constructor(product: Partial<ProductsEntity>) {
    Object.assign(this, product);
  }
}
