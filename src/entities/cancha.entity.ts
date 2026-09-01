src/entities/cancha.entity.ts



import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Horario } from './horario.entity';
import { Reserva } from './reserva.entity';

@Entity()
export class Cancha {
@PrimaryGeneratedColumn()
id: number;

@Column()
name: string;

@Column()
type: string;

@Column('decimal')
priceHour: number;

@Column()
status: string;

@OneToMany(() => Horario, (horario) => horario.cancha)
horarios: Horario[];

@OneToMany(() => Reserva, (reserva) => reserva.cancha)
reservas: Reserva[];
}