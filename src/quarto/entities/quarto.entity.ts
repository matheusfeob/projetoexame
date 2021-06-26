import { Reserva } from "src/reserva/entities/reserva.entity";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Quarto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @OneToOne(type => Reserva, reserva => reserva.quarto)
    @JoinColumn()
    reserva: Reserva;

    @OneToOne(type => Categoria, categoria => categoria.quarto)
    @JoinColumn()
    categoria: Categoria;
}
