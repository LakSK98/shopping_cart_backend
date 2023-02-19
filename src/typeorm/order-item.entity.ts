import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";
import { Product } from "./product.entity";

@Entity()
export class OrderItem {

    @PrimaryGeneratedColumn({
        type: "int"
    })
    id: number

    @Column({
        nullable: false,
        default: '',
    })
    title: string;

    @Column({
        type: "real"
    })
    price: number

    @Column({
        type: "real"
    })
    discount: number

    @Column({
        type: "int",
        name: "product_id"
    })
    productId: number;

    @Column({
        type: "int",
        name: "order_id"
    })
    orderId: number

    @ManyToOne(() => Product, (Product) => Product.id, { cascade: true })
    @JoinColumn({ name: "product_id" })
    product: Product;

    @ManyToOne(() => Order, (Order) => Order.id, { cascade: true })
    @JoinColumn({ name: "order_id" })
    order: Order

}