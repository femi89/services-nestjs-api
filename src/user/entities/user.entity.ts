import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Exclude } from 'class-transformer';

@Entity('users')
export class User {
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
  @Column()
  token: string;
}
