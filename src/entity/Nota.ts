import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {Aluno} from "./Aluno";
import {Materia} from "./Materia";

@Entity()
export class Nota {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Aluno, aluno => aluno.notas)
    @JoinColumn({name: "idAluno"})
    aluno: Aluno;

    @ManyToOne(type => Materia, materia => materia.notas)
    materia: Materia;

    @Column()
    prova: number;

    @Column()
    simulado: number;

    @Column()
    trabalhos: number;

    @Column()
    total: number;
}