import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument, SchemaTypes } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @ApiProperty()
  @Prop({ 
    type: SchemaTypes.ObjectId, 
    ref: User.name, 
    autopopulate: true 
  })
  supervisor: User;

  @ApiProperty()
  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @ApiProperty()
  @Prop({
    required: true,
  })
  name: string;

  @ApiProperty()
  @Prop({
    required: true,
  })
  job: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
