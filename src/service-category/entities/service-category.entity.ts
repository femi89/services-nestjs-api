import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ServiceEntity } from '../../services/entities/service.entity';
import slugify from 'slugify';

@Entity('service_categories')
export class ServiceCategoryEntities {
  @Column({ select: false })
  @PrimaryGeneratedColumn()
  public id: number;
  @Column({ nullable: true })
  public title: string;
  @Column({ nullable: true })
  public slug: string;
  @Column({ type: 'longtext', nullable: true })
  public description: string;
  @Column({ nullable: true })
  public image: string;
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
  @OneToMany(() => ServiceEntity, (service) => service.service_category)
  services: ServiceEntity[];
  @BeforeInsert()
  @BeforeUpdate()
  generateSlug() {
    this.slug = slugify(this.title, { lower: true });
  }
}
