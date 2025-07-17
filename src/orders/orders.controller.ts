import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Post('user')
  createUser() {
    return this.ordersService.createUser();
  }

  @Get('/:userId/:startDate/:endDate')
  findAll(
    @Param('userId') userId: string,
    @Param('startDate') startDate: string,
    @Param('endDate') endDate: string,
  ) {
    return this.ordersService.findAll(userId, startDate, endDate);
  }
}
