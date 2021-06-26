import { Quarto } from "src/quarto/entities/quarto.entity";
import { Hospede } from "src/hospede/entities/hospede.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(type => Hospede, hospede => hospede.reserva)
    @JoinColumn()
    hospede: Hospede;

    @OneToOne(type => Quarto, quarto => quarto.reserva)
    @JoinColumn()
    quarto: Quarto;
}
