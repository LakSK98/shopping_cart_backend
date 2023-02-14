import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;
}