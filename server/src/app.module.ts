import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
// import { MongooseModule } from "@nestjs/mongoose";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
