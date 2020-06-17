import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

@Schema({
  timestamps: true
})
export class User extends Document {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  emailAddress: string;

  @Prop()
  dateOfBirth: string;
}

export const UserSchema = SchemaFactory.createForClass(User);