import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Reserva } from './reserva.entity';

@Entity()
export class Pago {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Reserva, (reserva) => reserva.pago)
  @JoinColumn()
  reserva: Reserva;

  @Column('decimal')
  amount: number;

  @Column()
  paymentMethod: string;

  @Column()
  paymentStatus: string;

  @Column('timestamp')
  paidAt: Date;
}