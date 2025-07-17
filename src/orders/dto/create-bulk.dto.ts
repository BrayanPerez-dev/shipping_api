/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
export class IBulkDto {
    @IsNumber()
    length: number;

    @IsNumber()
    height: number;

    @IsNumber()
    width: number;

    @IsNumber()
    weight_pounds: number;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    orderId: number;
}