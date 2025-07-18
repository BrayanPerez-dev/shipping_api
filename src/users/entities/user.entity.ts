import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsDateString,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { Sex } from '../../../generated/prisma';

export class User {
  @IsString()
  @IsOptional()
  id: string;

  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsNotEmpty()
  @IsEnum(Sex)
  sex: Sex;

  @IsNotEmpty()
  @IsDateString()
  birthdate_date: Date;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  telephone: string;
}
