import { Injectable } from '@nestjs/common';
import { CommentEntity } from './comments.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(CommentEntity)
        private commentRepository: Repository<CommentEntity>,
    ) { }

    async addOneComment(comment: CommentEntity) {
        const data = this.commentRepository.create(comment);
        await this.commentRepository.save(comment);
        return data;
    }

    async getCommentsList(page, limit) {
        return this.commentRepository.find();
        // return this.commentRepository.find().limit(limit).skip((page - 1) * limit);
    }

    async updateLikes(commentId) {
        await this.commentRepository.increment({commentId},`likes`,1)
        return this.commentRepository.find();
    }

    async updateDisLikes(commentId) {
        await this.commentRepository.decrement({commentId},`likes`,1)
        return this.commentRepository.find();
    }

}
