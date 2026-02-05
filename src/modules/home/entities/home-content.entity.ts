import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('home_content')
export class HomeContent extends BaseEntity {
  @Column({ name: 'image_url', type: 'varchar', length: 255 })
  imageUrl: string;
}
