import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateOrderDto {
    @ApiProperty()
    @IsNotEmpty()
    amount: number;

    @ApiProperty()
    @IsNotEmpty()
    discount: number;

    @ApiProperty()
    @IsNotEmpty()
    products:number[];

    @ApiProperty()
    @IsNotEmpty()
    userId: number;
}
