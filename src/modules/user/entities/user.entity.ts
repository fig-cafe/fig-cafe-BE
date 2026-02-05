import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

@Entity('user')
export class User extends BaseEntity {
  @Column({ name: 'login_id', type: 'varchar', length: 50, unique: true })
  loginId: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ name: 'real_name', type: 'varchar', length: 50, comment: '입금자 대조용 실명' })
  realName: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 20, default: UserRole.USER, comment: 'USER, ADMIN' })
  role: UserRole;

  @Column({ name: 'fcm_token', type: 'varchar', length: 255, nullable: true })
  fcmToken: string;
}
