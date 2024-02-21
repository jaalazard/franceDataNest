import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/user/user.entity';
import { Response, Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('check')
  async checkAuthentication(
    @Req() req: Request<any>,
  ): Promise<{ isLoggedIn: boolean }> {
    return this.authService.checkAuthentication(req);
  }

  @Post('login')
  async login(@Body() user: User, @Res() res: Response) {
    const loginResponse = await this.authService.login(user, res);
    return res.status(loginResponse.status || 200).json(loginResponse);
  }

  @Post('register')
  register(@Body() user: User) {
    return this.authService.register(user);
  }
}
