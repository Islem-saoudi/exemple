import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PostSchema, Post } from "src/schemas/Post.scheme";
import { PostsController } from "./posts.controller";
import { PostsService } from "./posts.service";

@Module({
  imports:[
     MongooseModule.forFeature([
      {
      name: Post.name,
      schema: PostSchema,
     }
    ])
  ],
  controllers: [PostsController],
  providers: [PostsService],
})

export class PostModule {}
