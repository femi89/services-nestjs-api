import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
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
  @OneToMany(() => ServiceEntity, (service) => service.user)
  services: ServiceEntity[];
}
