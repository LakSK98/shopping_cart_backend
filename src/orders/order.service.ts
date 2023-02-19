import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItemService } from 'src/order-item/order-item.service';
import { Order } from 'src/typeorm/order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {

  constructor(
    @InjectRepository (Order) private readonly orderRepository:Repository<Order>,
    private readonly orderItemService: OrderItemService
    ){}

  async create(createOrderDto: CreateOrderDto) {
    const order = await this.orderRepository.save(createOrderDto);
    createOrderDto.orderItems.map(orderItem=>{
      console.log({...orderItem, orderId: order.id })
      this.orderItemService.create({...orderItem, orderId: order.id });
    })
    return {state:true, message: "Order created Successfully."};
  }

  findAll() {
    return this.orderRepository.find();
  }

  findOne(id: number) {
    return this.orderRepository.findOneBy({id});
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
