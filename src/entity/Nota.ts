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
    @JoinColumn({name: "materiaId"})
    materia: Materia;

    @Column({default: 0})
    prova: number;

    @Column({default: 0})
    simulado: number;

    @Column({default: 0})
    trabalhos: number;

    @Column({default: 0})
    total: number;
}