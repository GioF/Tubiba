import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Nota} from "./Nota";

@Entity()
export class Aluno {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: 0})
    Matricula: number;

    @Column({length: 100})
    nome: string;

    @Column({length: 100})
    sobrenome: string;

    @Column({type: "smallint"})
    Ano: number;

    @Column({length: 1})
    Sala: string;

    @Column({length: 40})
    Unidade: string;

    @Column({length: 14, type: "char"})
    Cpf: string;

    @OneToMany(type => Nota, nota => nota.aluno)
    notas: Nota[];
}