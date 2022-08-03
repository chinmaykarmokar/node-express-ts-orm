import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity ()
export class Footballers extends BaseEntity {
    @PrimaryGeneratedColumn() 
    id!: number;

    @Column({length: 100})
    name!: string;

    @Column()
    age!: number;

    @Column({length: 100})
    team!: string;
}