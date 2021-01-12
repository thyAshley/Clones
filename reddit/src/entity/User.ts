import { IsEmail, Min } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class User extends BaseEntity {
  constructor(user: Partial<User>) {
    super();
    Object.assign(this, user);
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({ unique: true })
  @Min(3)
  username: string;

  @Index()
  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Index()
  @Column()
  @Min(6)
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
