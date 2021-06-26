import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Quarto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    categoria: number;
}
