import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  IsDateString,
  IsEnum,
} from 'class-validator';
import { Sex } from '../../../generated/prisma';

export class RegisterAuthDto {
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

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;
}
