import {
  Controller,
  Post,
  Body
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ForgetPasswordDto, LoginDto, RegisterDto, ResetPasswordDto } from "./dto/login.dto";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../user/user.service";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService,
    private userService: UserService
    ) {}
  @Post('login')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: LoginDto,
  })
  async login(@Body() createAuthDto: LoginDto) {
    // return this.authService.create(createAuthDto);
    const user = this.userService.findUserWithField(createAuthDto.email);
    return user;
    const token = this.jwtService.signAsync(createAuthDto);
    return {
      access_token: token,
    };
  }
  @Post('register')
  register(@Body() createAuthDto: RegisterDto) {
    return this.authService.create(createAuthDto);
  }
  @Post('password/reset')
  forgetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    // return this.authService.create(createAuthDto);
  }
  @Post('forget-password')
  resetPassword(@Body() forgetPasswordDto: ForgetPasswordDto) {
    // return this.authService.create(createAuthDto);
  }
}
