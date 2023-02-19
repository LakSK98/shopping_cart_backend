import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { CreateOrderItemDto } from "src/order-item/dto/create-order-item.dto";

export class CreateOrderDto {
    @ApiProperty()
    @IsNotEmpty()
    amount: number;

    @ApiProperty()
    @IsNotEmpty()
    discount: number;

    @ApiProperty()
    @IsNotEmpty()
    orderItems: CreateOrderItemDto[];

    @ApiProperty()
    @IsNotEmpty()
    userId: number;
}
