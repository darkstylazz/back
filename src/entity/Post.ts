import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany} from "typeorm";
import { User } from "./User";
import { Comment } from "./Comment";

@Entity()
export class Post {

    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    image: string;

    @Column()
    caption: string;

    @Column()
    location: string;

    @ManyToOne(type => User, user => user.posts)
    user: User;

    @ManyToOne(type => Comment, comment => comment.post)
    comments: Comment[];

    @ManyToMany(type => User, user => user.likedPosts)
    userLikes: User[];
}
