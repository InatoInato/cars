import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateCarDto {
  @IsNotEmpty()
  @IsString()
  make: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsNumber()
  year: number;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsNumber()
  engine: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
