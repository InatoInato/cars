import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateCarDto{
    @IsString()
    @IsOptional()
    make?: string;
  
    @IsString()
    @IsOptional()
    model?: string;
  
    @IsNumber()
    @IsOptional()
    year?: number;

    @IsString()
    @IsOptional()
    color?: string;

    @IsNumber()
    @IsOptional()
    engine:number;
  
    @IsNumber()
    @IsOptional()
    price?: number;
}