import {
  IsArray,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { IBulkDto } from './create-bulk.dto';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsString()
  @IsNotEmpty()
  destination_address: string;

  @IsString()
  @IsNotEmpty()
  collection_address: string;

  @IsString()
  @IsNotEmpty()
  telephone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  @IsString()
  indications: string;

  @IsString()
  @IsNotEmpty()
  department: string;

  @IsString()
  @IsNotEmpty()
  town: string;

  @IsString()
  @IsOptional()
  reference: string;

  @IsDateString()
  @IsNotEmpty()
  scheduled_date: Date;

  @IsArray()
  bulks: IBulkDto[];
}
