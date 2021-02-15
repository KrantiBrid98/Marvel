
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('comments')
export class CommentEntity {
    @PrimaryGeneratedColumn()
    commentId: number;

    @Column()
    userName: string;

    @Column()
    userId: number;

    @Column({default: ''})
    date: string;

    @Column()
    time: string;

    @Column({default: ''})
    comment: string;

    @Column({default: 0})
    likes: number;

    @Column({default: 0})
    dislike: number;
}
