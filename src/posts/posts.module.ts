import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PostSchema, Post } from "src/schemas/Post.scheme";
import { PostsController } from "./posts.controller";
import { PostsService } from "./posts.service";
import { User, UserSchema } from "src/schemas/user.schema";

@Module({
  imports:[
     MongooseModule.forFeature([
      {
      name: Post.name,
      schema: PostSchema,
     },
     {
      name: User.name,
      schema: UserSchema,
     }
    ])
  ],
  controllers: [PostsController],
  providers: [PostsService],
})

export class PostModule {}
