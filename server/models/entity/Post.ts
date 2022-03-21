import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Post_Comments } from "./Post_Comments";
import { Post_Likes } from "./Post_Likes";
import { Users } from "./User";

@Entity()
export class Posts extends BaseEntity {
  // 이엔티티 (테이블) 에서 저장 삭제를 하기위해서 baseEntity
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  info: string;
  @Column()
  total_Likes: string;
  @Column()
  total_time: string;
  @Column()
  created_At: Date;
  @Column()
  body_Part: string;
  @Column()
  difficult: number;
  @Column()
  image: string;

  @ManyToOne((type) => Users, (e) => e.posts)
  users: Users;

  @OneToMany((type) => Post_Comments, (e) => e.post)
  post_comments: Post_Comments[];

  @OneToMany((type) => Post_Likes, (e) => e.post)
  post_likes: Post_Likes[];
}
