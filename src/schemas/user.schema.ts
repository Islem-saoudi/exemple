import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Post } from "./Post.scheme";
import mongoose from "mongoose";

@Schema()
export class User{
  @Prop({ unique: true, required: true})
  username: string;
 
  @Prop({ required: false})
  displayName?: string // ? means that displayName ca be undefined

  @Prop({ required: false })
  avatarUrl?: string;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]})
  posts: Post[];
}

export const UserSchema = SchemaFactory.createForClass(User);

