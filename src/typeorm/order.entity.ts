import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { User } from "./user.entity";

@Entity()
export class Order {
    @PrimaryGeneratedColumn({
        type: "int",
        name: "order_id"
    })
    id: number;

    @Column({
        type: "real",
        name: "amount"
    })
    amount: number;

    @Column({
        type: "real",
        name: "discount"
    })
    discount: number;

    @Column("int", {
        array: true,
        default: {},
        name: "products"
    })
    products: number[]

    @CreateDateColumn({
        name: "date"
    })
    date: Date;

    @Column({
        name: "user_id"
    })
    userId: number;

    @ManyToOne(() => User, (User) => User.id, { cascade: true })
    @JoinColumn({ name: 'user_id' })
    user: User;
}
