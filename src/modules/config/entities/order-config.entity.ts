import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('order_config')
export class OrderConfig extends BaseEntity {
  @Column({ name: 'is_order_enabled', type: 'boolean', nullable: true })
  isOrderEnabled: boolean;

  @Column({ name: 'max_orders_per_10min', type: 'int', nullable: true })
  maxOrdersPer10min: number;
}
