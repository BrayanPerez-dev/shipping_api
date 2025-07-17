import {
  IsArray,
  IsDateString,
  IsEmail,
  IsNumber,
  IsString,
} from 'class-validator';
import { IBulkDto } from './create-bulk.dto';

export class CreateOrderDto {
  @IsString()
  userId: string;

  @IsNumber()
  orderNumber: number;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  destination_address: string;

  @IsString()
  collection_address: string;

  @IsString()
  telephone: string;

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
