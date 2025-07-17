import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Order } from './entities/order.entity';
//import { Order } from '../../generated/prisma';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}
  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const { bulks, ...orderData } = createOrderDto;

    if (!bulks || bulks.length === 0) {
      throw new Error('At least one bulk is required');
    }

    return await this.prisma.order.create({
      data: {
        ...orderData,
        orderNumber: Math.floor(Math.random() * 1000000),
        bulk: {
          create: bulks,
        },
      },
    });
  }
  async createUser() {
    return await this.prisma.user.create({
      data: {
        first_name: 'Juan',
        last_name: 'Pérez',
        sex: 'MALE',
        birthdate_date: new Date('1990-01-01'),
        email: 'juan@example.com',
        telephone: '50312345678',
        password: 'hashedpassword',
      },
    });
  }

  findAll(
    userId: string,
    startDate: string,
    endDate: string,
  ): Promise<Order[]> {
    console.log(userId, startDate, endDate);
    return this.prisma.order.findMany({
      where: {
        userId: userId,
        scheduled_date: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
      include: {
        bulk: true,
      },
    });
  }
}
