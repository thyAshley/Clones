import { IsEmail, Length, MinLength } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { classToPlain, Exclude } from "class-transformer";
import bcrypt from "bcryptjs";
import { Post } from "./Post";
import { Vote } from "./Vote";

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
  @MinLength(3, { message: "Must be at least 3 character Long" })
  @Column({ unique: true })
  username: string;

  @Index()
  @Column({ unique: true })
  @IsEmail({ message: "Must be a valid email address" })
  @MinLength(1, { message: "Email is empty" })
  email: string;

  @Column()
  @MinLength(6, { message: "Must be at least 6 character long" })
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

  @ManyToOne(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Vote, (vote) => vote.user)
  votes: Vote[];
}
