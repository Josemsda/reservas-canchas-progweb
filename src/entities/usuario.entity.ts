import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reserva } from './reserva.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @OneToMany(() => Reserva, (reserva) => reserva.usuario)
  reservas: Reserva[];
}