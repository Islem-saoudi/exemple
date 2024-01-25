import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Post } from "src/schemas/Post.scheme";
import { CreatePostDto } from "./dto/CreatePost.dto";

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  createPost(createPostDto: CreatePostDto) {
    const newPost = new this.postModel(createPostDto);
    return newPost.save();
  }

  findPostById() {}

}
