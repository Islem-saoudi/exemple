import { Schema, Prop } from "@nestjs/mongoose";

@Schema()
export class User{
  @Prop({ unique: true, required: true})
  username: string;
 
  @Prop({ required: false})
  displayName?: string // ? means that displayName ca be undefined

  @Prop({ required: false })
  avatarUrl?: string;
}