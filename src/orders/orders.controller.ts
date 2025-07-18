import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { User } from 'src/users/entities/user.entity';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@CurrentUser() user: User, @Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto, user.id);
  }

  @Get()
  findAll(
    @CurrentUser() user: User,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.ordersService.findAll(user.id, startDate, endDate);
  }
}
