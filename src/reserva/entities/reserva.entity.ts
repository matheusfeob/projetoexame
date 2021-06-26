import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reserva {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    startDate: string;

    @Column()
    endDate: string;

    @Column()
    reserved: boolean;

    @Column()
    hospede: number;
}
