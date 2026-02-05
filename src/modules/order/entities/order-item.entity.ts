import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { Order } from './order.entity';
import { Menu } from '../../menu/entities/menu.entity';

@Entity('order_item')
export class OrderItem extends BaseEntity {
  @Column({ name: 'order_id' })
  orderId: number;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Column({ name: 'menu_id' })
  menuId: number;

  @ManyToOne(() => Menu)
  @JoinColumn({ name: 'menu_id' })
  menu: Menu;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ name: 'selected_options', type: 'varchar', length: 255, nullable: true, comment: '선택 옵션 텍스트 합계' })
  selectedOptions: string;

  @Column({ name: 'option_extra_price', type: 'int', nullable: true })
  optionExtraPrice: number;
}
