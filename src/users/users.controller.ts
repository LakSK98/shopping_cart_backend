import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ValidationPipe } from '@nestjs/common/pipes';
import { LoginUserDto } from './dto/login-user.dto';
import { Response } from 'express';
import { Request, Res, UseGuards } from '@nestjs/common/decorators';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private readonly authService: AuthService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('/login')
  @UsePipes(ValidationPipe)
  async login(@Res() response:Response, @Body() loginUserDto: LoginUserDto) {
    const user = await this.usersService.findByEmail(loginUserDto.email);
    if(user == null){
      return response.status(404).json({message :'User not found.'});
    }else if(user.password != loginUserDto.password){
      return response.status(400).send({message :'Password Incorrect.'});
    }
    return response.status(200).json(await this.authService.login(user));
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return await this.usersService.findOne(parseInt(req.user.userId));
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
