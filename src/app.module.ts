import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from './users/users.module';
import { PostModule } from './posts/posts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/exemple'),
    UserModule,
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
