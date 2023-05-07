import { Column, PrimaryGeneratedColumn } from 'typeorm';
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  password: string;
}
