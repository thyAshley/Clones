import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  BeforeInsert,
  OneToMany,
  AfterLoad,
} from "typeorm";

import { User } from "./User";
import { slugify, makeID } from "../components/post/postServices";
import { Sub } from "./Sub";
import { Comment } from "./Comment";
import { Exclude, Expose } from "class-transformer";
import { Vote } from "./Vote";

@Entity("posts")
export class Post extends BaseEntity {
  constructor(post: Partial<Post>) {
    super();
    Object.assign(this, post);
  }

  @Index()
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  identifier: string;

  @Index()
  @Column()
  title: string;

  @Index()
  @Column()
  slug: string;

  @Column({ nullable: true, type: "text" })
  body: string;

  @Column()
  subName: string;

  @Column()
  username: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: "username", referencedColumnName: "username" })
  user: User;

  @ManyToOne(() => Sub, (sub) => sub.post)
  @JoinColumn({ name: "subName", referencedColumnName: "name" })
  sub: Sub;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  protected url: string;
  protected commentCount: number;
  protected voteScore: number;
  protected userVote: number;

  setUserVote(user: User) {
    const index = this.votes
      ? this.votes.findIndex((vote) => vote.username === user.username)
      : -1;
    this.userVote = index > -1 ? this.votes[index].value : 0;
  }

  @AfterLoad()
  createFields() {
    this.url = `/r/${this.subName}/${this.identifier}/${this.slug}`;
  }

  @AfterLoad()
  count() {
    this.commentCount = this.comments ? this.comments.length : 0;
  }

  @AfterLoad()
  totalVote() {
    this.voteScore = this.votes
      ? this.votes.reduce((prev, current) => prev + (current.value || 0), 0)
      : 0;
  }

  @Exclude()
  @OneToMany(() => Vote, (vote) => vote.post)
  votes: Vote[];

  @BeforeInsert()
  populateIdAndSlug() {
    this.identifier = makeID(6);
    this.slug = slugify(this.title);
  }
}
