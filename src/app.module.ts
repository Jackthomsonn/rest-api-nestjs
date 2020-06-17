import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { config } from './config';

@Module({
  imports: [
    MongooseModule.forRoot(config.MONGO_URL),
    UserModule,
  ],
})

export class AppModule { }
