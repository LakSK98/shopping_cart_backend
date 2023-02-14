import { Controller, Get, Post, Body, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ValidationPipe } from '@nestjs/common/pipes';
import { LoginUserDto } from './dto/login-user.dto';
import { Response } from 'express';
import { Request, Res, UseGuards } from '@nestjs/common/decorators';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private readonly authService: AuthService) { }

  @Post('/register')
  @UsePipes(ValidationPipe)
  async registerUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    const { password, ...result } = user;
    return await this.authService.login(result);
  }

  @Post('/login')
  @UsePipes(ValidationPipe)
  async login(@Res() response: Response, @Body() loginUserDto: LoginUserDto) {
    const user = await this.usersService.findByEmail(loginUserDto.email);
    if (user == null) {
      return response.status(404).json({ message: 'User not found.' });
    } else if (!await bcrypt.compare(loginUserDto.password, user.password)) {
      return response.status(400).send({ message: 'Password Incorrect.' });
    }
    return response.status(200).json(await this.authService.login(user));
  }

  @UseGuards(JwtAuthGuard)
  @Get('/auth')
  async getProfile(@Request() req) {
    return await this.usersService.findOne(parseInt(req.user.userId));
  }

}
