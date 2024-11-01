import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './entities/car';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dto/createCarDto';
import { UpdateCarDto } from './dto/updateCarDto';

@Injectable()
export class CarService {
    constructor(
        @InjectRepository(Car)
        private carRepo: Repository<Car>
    ){}

    async getAll(): Promise<Car[]>{
        return await this.carRepo.find();
    }

    async getById(id: number): Promise<Car>{
        return await this.carRepo.findOne({where: {id}});
    }

    async create(createCar: CreateCarDto): Promise<Car>{
        const car = this.carRepo.create(createCar);
        console.log(car);
        return await this.carRepo.save(car);
    }

    async update(id: number, updateCar: UpdateCarDto): Promise<Car>{
        await this.carRepo.update(id, updateCar);
        return this.getById(id);
    }

    async delete(id: number): Promise<string>{
        const car = this.getById(id);
        if(!car){
            throw new NotFoundException("Car not found");
        }
        await this.carRepo.delete(id);
        return "Car was deleted";
    }
}
