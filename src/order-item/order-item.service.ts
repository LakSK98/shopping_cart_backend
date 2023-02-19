import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItem } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

@Injectable()
export class OrderItemService {

  constructor(
    @InjectRepository(OrderItem) private readonly orderItemRepository: Repository<OrderItem>
  ){}

  create(createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemRepository.save(createOrderItemDto);
  }

  findAll() {
    return this.orderItemRepository.find();
  }

  findOne(id: number) {
    return this.orderItemRepository.findOneBy({id});
  }

  update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    return `This action updates a #${id} orderItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderItem`;
  }
}
