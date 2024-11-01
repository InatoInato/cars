import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './car/entities/car';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'cars',
      entities: [Car],
      synchronize: true
    }),
    CarModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
