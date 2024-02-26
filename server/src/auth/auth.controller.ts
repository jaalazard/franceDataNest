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
  async register(@Body() user: User, @Res() res: Response) {
    const registerResponse = await this.authService.register(user, res);

    return res.json(registerResponse);
  }

  @Post('logout')
  logout(@Res() res: Response) {
    return this.authService.logout(res);
  }
}
