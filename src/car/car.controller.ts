import { CreateCarDto } from './dto/createCarDto';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from './entities/car';
import { UpdateCarDto } from './dto/updateCarDto';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  async getAll(): Promise<Car[]>{
    return await this.carService.getAll();
  }

  @Get(":id")
  async getById(@Param('id') id: number): Promise<Car>{
    return await this.carService.getById(id);
  }

  @Post()
  async create(@Body() createCar: CreateCarDto){
    try{
      console.log(createCar);
      const carData =  await this.carService.create(createCar);
      return carData;
    }
    catch(e){
      console.error("Post err: ", e);
    }
  }
  
  @Put(':id')
  async update(@Param('id') id: number,@Body() updateCar: UpdateCarDto): Promise<Car>{
    return await this.carService.update(id, updateCar);
  }

  @Delete(":id")
  async delete(@Param("id") id: number): Promise<void>{
    await this.carService.delete(id);
  }
}
