/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  fullname: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  dob: string;

  @IsNotEmpty()
  phone: number;
}
