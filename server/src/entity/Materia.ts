import {Column, ManyToOne, Entity, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Nota} from "./Nota";

@Entity()
export class Materia {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    professor: string;

    @OneToMany(type => Nota, nota => nota.materia)
    notas: Nota[];
}