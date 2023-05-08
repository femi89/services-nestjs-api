import {
  Controller,
  Post,
  Body, UseGuards
} from "@nestjs/common";
import { AuthService } from './auth.service';
import { ForgetPasswordDto, LoginDto, RegisterDto, ResetPasswordDto } from "./dto/login.dto";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../user/user.service";
import { Public } from "../decorators/auth/auth.decorator";
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    ) {}
  @Public()
  @Post('login')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: LoginDto,
  })
  async login(@Body() createAuthDto: LoginDto) {
    /*const user = await this.userService.findUserWithField(createAuthDto.email);
    if (!user) {
      throw new NotFoundException('User not found or Invalid password');
    }
    if (
      !createAuthDto.password ||
      !(await bcrypt.compare(createAuthDto.password, user.password))
    ) {
      throw new BadRequestException('User not found or Invalid password');
    }
    const token = this.jwtService.signAsync(createAuthDto, {
      secret: process.env.JWT_SECRET,
    });*/
    const token = this.jwtService.sign(createAuthDto.email, {
      secret: 'secret',
    });
    return {
      access_token: token,
    };
  }
  @Public()
  @Post('register')
  register(@Body() createAuthDto: RegisterDto) {
    return this.userService.create(createAuthDto);
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
