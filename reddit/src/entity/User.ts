import { IsEmail, MinLength } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from "typeorm";
import { classToPlain, Exclude } from "class-transformer";
import bcrypt from "bcryptjs";

@Entity("users")
export class User extends BaseEntity {
  constructor(user: Partial<User>) {
    super();
    Object.assign(this, user);
  }
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Index()
  @MinLength(3)
  @Column({ unique: true })
  username: string;

  @Index()
  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Index()
  @Column()
  @MinLength(6)
  @Exclude()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  toJSON() {
    return classToPlain(this);
  }
}
