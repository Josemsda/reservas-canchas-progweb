src/entities/horario.entity.ts



import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Cancha } from './cancha.entity';
import { Reserva } from './reserva.entity';

@Entity()
export class Horario {
@PrimaryGeneratedColumn()
id: number;

@ManyToOne(() => Cancha, (cancha) => cancha.horarios)
cancha: Cancha;

@Column('time')
startTime: string;

@Column('time')
endTime: string;

@Column()
dayOfWeek: string;

@OneToMany(() => Reserva, (reserva) => reserva.horario)
reservas: Reserva[];
}