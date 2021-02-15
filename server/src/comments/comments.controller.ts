import { Controller, Body, Post, Get, Query, DefaultValuePipe, ParseIntPipe, Param, Patch, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentEntity } from './comments.entity';

@Controller('comment')
export class CommentsController {

    constructor(private service: CommentsService) { }

    @Post()
    createComment(@Body() body: CommentEntity) {
        return this.service.addOneComment(body)
    }

    @Get()
    getAllComments(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number, @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number) {
        return this.service.getCommentsList(page, limit)
    }

    @Patch('like/:id')
    AddLikes(@Param('id') commentid: number) {
        return this.service.updateLikes(commentid)
    }

    @Delete(`/:id`)
    deleteComment(@Param(`id`) commentid:number){
        return this.service.deleteComment(commentid)
    }

    @Patch('dislike/:id')
    AddDislikes(@Param('id') commentid: number) {
        return this.service.updateDisLikes(commentid)
    }
}
