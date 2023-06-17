import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { ServiceCategoryEntities } from '../../service-category/entities/service-category.entity';

@Entity('services')
export class ServiceEntity {
  @Column({ select: false })
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', nullable: true })
  title: string;
  @Column({ type: 'longtext', nullable: true })
  description: string;
  @ManyToOne(() => UserEntity, (user) => user.services, {
    cascade: true,
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
  @ManyToOne(() => ServiceCategoryEntities, (category) => category.services, {
    cascade: true,
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'service_category_id' })
  service_category: ServiceCategoryEntities;
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;
  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;
}
