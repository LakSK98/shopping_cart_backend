import { OrderItem } from "./order-item.entity";
import { Order } from "./order.entity";
import { Product } from "./product.entity";
import { User } from "./user.entity";

const entities = [User, Product, Order, OrderItem];

export { User, Product, Order, OrderItem };
export default entities;