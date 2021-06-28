import { Reserva } from "src/reserva/entities/reserva.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hospede {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column()
    city: string;

    @OneToOne(type => Reserva, reserva => reserva.hospede)
    reserva: Reserva;
}
