import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'product_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  title: string;

  @Column({
    nullable: false,
    default: '',
  })
  subTitle: string;

  @Column({
    nullable: false,
    default: '',
  })
  description: string;

  @Column({
    nullable: false,
    default: '',
  })
  image: string;

  @Column({
    nullable: false,
    default: 0,
  })
  price: number;

  @Column({
    nullable: false,
    default: 0,
  })
  totalRating: number;

  @Column({
    nullable: false,
    default: 0,
  })
  noOfRatings: number;
}