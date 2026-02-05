import { Entity, Column, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { User } from '../../user/entities/user.entity';

export enum OrderStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  READY = 'READY',
  COMPLETED = 'COMPLETED',
  REJECTED = 'REJECTED',
}

@Entity('orders')
export class Order extends BaseEntity {
  @Column({ name: 'user_id' })
  userId: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'total_price', type: 'int' })
  totalPrice: number;

  @Column({ type: 'varchar', length: 20, comment: 'PENDING, ACCEPTED, READY, COMPLETED, REJECTED' })
  status: OrderStatus;

  @Column({ name: 'ordered_at', type: 'timestamp' })
  orderedAt: Date;
}
