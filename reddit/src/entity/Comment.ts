import { makeID } from "../components/post/postServices";
import {
  BaseEntity,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  BeforeInsert,
  OneToMany,
} from "typeorm";
import { Post, User } from ".";
import { Vote } from "./Vote";
import { Exclude } from "class-transformer";

@Entity("comments")
export class Comment extends BaseEntity {
  constructor(comment: Partial<Comment>) {
    super();
    Object.assign(this, comment);
  }

  @Index()
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  identifier: string;

  @Column()
  body: string;

  @Column()
  username: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: "username", referencedColumnName: "username" })
  user: User;

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;

  @Exclude()
  @OneToMany(() => Vote, (vote) => vote.comment)
  vote: Vote[];

  protected userVote: number;

  setUserVote(user: User) {
    const index = this.vote
      ? this.vote.findIndex((v) => v.username === user.username)
      : -1;
    this.userVote = index > -1 ? this.vote[index].value : 0;
  }

  @BeforeInsert()
  makeId() {
    this.identifier = makeID(12);
  }
}
