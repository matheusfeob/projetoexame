import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
