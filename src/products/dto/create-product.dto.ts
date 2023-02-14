import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    subTitle: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    image: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    totalRating: number;

    @ApiProperty()
    noOfRatings: number;
}
