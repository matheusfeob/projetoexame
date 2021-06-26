import { Quarto } from "src/quarto/entities/quarto.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @OneToOne(type => Quarto, quarto => quarto.categoria)
    @JoinColumn()
    quarto: Quarto;
}
