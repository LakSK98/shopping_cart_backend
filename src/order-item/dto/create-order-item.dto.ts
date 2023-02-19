import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateOrderItemDto {

    @ApiProperty()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsNotEmpty()
    price: number

    @ApiProperty()
    @IsNotEmpty()
    discount: number

    @ApiProperty()
    @IsNotEmpty()
    productId: number;

    orderId: number

}
