import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { User } from './entities/user.entity';
import { User as UserModel } from '../../generated/prisma';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
    return this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });
  }

  findOne(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        first_name: true,
        last_name: true,
        telephone: true,
        birthdate_date: true,
        sex: true,
        password: false,
      },
    });
  }

  findByEmail(email: string): Promise<UserModel | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
