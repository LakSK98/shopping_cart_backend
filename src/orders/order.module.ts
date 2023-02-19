import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/typeorm';
import { OrderItemModule } from 'src/order-item/order-item.module';

@Module({
  imports:[TypeOrmModule.forFeature([Order]), OrderItemModule],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
