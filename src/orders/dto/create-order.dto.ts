import {
  IsArray,
  IsDateString,
  IsEmail,
  IsNumber,
  IsString,
} from 'class-validator';
import { IBulkDto } from './create-bulk.dto';
import { OrderStatus } from '../types/order.type';

export class CreateOrderDto {
  @IsNumber()
  userId: number;

  @IsString()
  collection_address: string;

  @IsString()
  status: OrderStatus;

  @IsNumber()
  orderNumber: number;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  destination_address: string;

  @IsNumber()
  telephone: string;

  @IsEmail()
  @IsEmail()
  email: string;

  @IsString()
  indications: string | null;

  @IsString()
  department: string;

  @IsString()
  town: string;

  @IsString()
  reference: string | null;

  @IsDateString()
  scheduled_date: Date;

  @IsArray()
  bulks: IBulkDto[];
}
