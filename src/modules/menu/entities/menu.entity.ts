import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('menu')
export class Menu extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  category: string;

  @Column({ name: 'image_url', type: 'varchar', length: 255, nullable: true })
  imageUrl: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ name: 'stock_quantity', type: 'int', default: 0, comment: '0이면 품절 처리' })
  stockQuantity: number;

  @Column({ name: 'is_new', type: 'boolean', nullable: true })
  isNew: boolean;

  @Column({ name: 'is_best', type: 'boolean', nullable: true })
  isBest: boolean;
}
