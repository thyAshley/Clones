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
} from "typeorm";

import { User } from "./User";
import { slugify, makeID } from "../components/post/postServices";
import { Sub } from "./Sub";
import { Comment } from "./Comment";

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

  @BeforeInsert()
  populateIdAndSlug() {
    this.identifier = makeID(6);
    this.slug = slugify(this.title);
  }
}
