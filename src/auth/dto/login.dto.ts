import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumberString } from "class-validator";

export class LoginDto {
  @ApiProperty({ example: 'password' })
  password: string;
  @ApiProperty({ example: 'user@email.com' })
  @IsEmail()
  email: string;
}

export class RegisterDto {
  @ApiProperty({ example: 'password' })
  @IsNotEmpty()
  password: string;
  @ApiProperty()
  @IsNumberString()
  phone: string;
  @ApiProperty({ example: 'user@email.com' })
  @IsEmail()
  email: string;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
}

export class ResetPasswordDto {
  @ApiProperty()
  token: string;
  @ApiProperty({ required: true, example: 'password' })
  password: string;
}
export class ForgetPasswordDto {
  @ApiProperty()
  email: string;
}
