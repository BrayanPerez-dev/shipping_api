import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Order } from './entities/order.entity';
import { IFindOrder } from './types/order.type';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}
  async create(createOrderDto: CreateOrderDto, userId: string): Promise<Order> {
    const { bulks, ...orderData } = createOrderDto;

    if (!userId) {
      throw new Error('User id must be here');
    }
    if (!bulks || bulks.length === 0) {
      throw new Error('At least one bulk is required');
    }
    return await this.prisma.order.create({
      data: {
        ...orderData,
        userId,
        orderNumber: Math.floor(Math.random() * 1000000),
        bulk: {
          create: bulks,
        },
      },
    });
  }

  findAll(
    userId: string,
    startDate?: string,
    endDate?: string,
  ): Promise<Order[]> {
    const where: IFindOrder = {
      userId: userId,
    };

    if (startDate && endDate) {
      where.scheduled_date = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      };
    }

    return this.prisma.order.findMany({
      where,
      include: {
        bulk: true, // Incluir los bulks relacionados con la orden
      },
    });
  }
}
