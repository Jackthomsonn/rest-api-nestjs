import { User } from './user.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  getUsers() {
    return this.userModel.find();
  }

  getUser(userId: string) {
    return this.userModel.findById(userId);
  }

  createUser(userDoc: User) {
    const newUser = new this.userModel(userDoc);

    return newUser.save();
  }

  updateUser(userId: string, newDoc: User) {
    return this.userModel.findByIdAndUpdate(userId, newDoc);
  }

  deleteUser(userId: string) {
    return this.userModel.findByIdAndDelete(userId);
  }
}
