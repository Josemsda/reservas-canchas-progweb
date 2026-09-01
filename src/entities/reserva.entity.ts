import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Cancha } from './cancha.entity';
import { Horario } from './horario.entity';
import { Pago } from './pago.entity';

@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.reservas)
  usuario: Usuario;

  @ManyToOne(() => Cancha, (cancha) => cancha.reservas)
  cancha: Cancha;

  @ManyToOne(() => Horario, (horario) => horario.reservas)
  horario: Horario;

  @Column('date')
  date: string;

  @Column()
  status: string;

  @OneToOne(() => Pago, (pago) => pago.reserva)
  pago: Pago;
}