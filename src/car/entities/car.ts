import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('car')
export class Car{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    make: string;

    @Column({nullable: true})
    model: string;

    @Column({nullable: true})
    year: number;

    @Column({nullable: true})
    color: string;

    @Column('float', {nullable: true})
    engine: number;

    @Column( "decimal", {precision: 10, scale: 2, nullable: true}, )
    price: number;
}