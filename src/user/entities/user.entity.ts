import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn
} from "typeorm";
import { Exclude } from 'class-transformer';
import { ServiceEntity } from "../../services/entities/service.entity";

@Entity('users')
export class UserEntity {
  @Column({ select: false })
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @Exclude()
  password: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Unique(['email', 'id'])
  @Column()
  email: string;
  @Column({ nullable: true, select: false })
  token: string;
  @OneToMany(() => ServiceEntity, (service) => service.user)
  services: ServiceEntity[];
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
