import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Post } from "src/schemas/Post.scheme";
import { CreatePostDto } from "./dto/CreatePost.dto";
import { User } from "src/schemas/user.schema";

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<Post>,
    @InjectModel(User.name) private userModel: Model<User>
  ) {}

  async createPost({userId, ...createPostDto}: CreatePostDto) {
    const findUser = await this.userModel.findById(userId);
    if (!findUser) throw new HttpException('User Not Found', 404);
    const newPost = new this.postModel(createPostDto);
    const savedPost = await newPost.save();
    //findUser.posts.push(savedPost._id);
    await findUser.updateOne({ 
      $push: {
        posts: savedPost._id,
      }, 
    });
    return savedPost;
  }

  findPostById() {}

}
