/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  fullname: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  dob: string;

  @Prop({ required: true })
  phone: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
