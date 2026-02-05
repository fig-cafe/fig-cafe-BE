import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { Order } from './order.entity';

export enum PaymentStatus {
  READY = 'READY',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  REFUNDED = 'REFUNDED',
}

@Entity('payment')
export class Payment extends BaseEntity {
  @Column({ name: 'order_id' })
  orderId: number;

  @OneToOne(() => Order)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Column({ type: 'int' })
  amount: number;

  @Column({ type: 'varchar', length: 20, comment: 'READY, COMPLETED, CANCELLED, REFUNDED' })
  status: PaymentStatus;

  @Column({ name: 'refund_bank', type: 'varchar', length: 50, nullable: true })
  refundBank: string;

  @Column({ name: 'refund_account_num', type: 'varchar', length: 100, nullable: true })
  refundAccountNum: string;

  @Column({ name: 'refund_owner', type: 'varchar', length: 50, nullable: true })
  refundOwner: string;

  @Column({ name: 'payment_time', type: 'timestamp', nullable: true })
  paymentTime: Date;
}
