import { User } from '../user/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { Injectable, Res } from '@nestjs/common';
import { Response } from 'express';
import * as crypto from 'crypto';
import { Request } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validate(email: string): Promise<any> {
    return this.userService.getUserByEmail(email);
  }

  public async login(
    user: User,
    @Res() res: Response,
  ): Promise<any | { status: number }> {
    return this.validate(user.email).then((userData) => {
      if (!userData || userData.password != this.hash(user.password)) {
        return {
          isLoggedIn: false,
        };
      }

      const payload = `${userData.email}`;

      const accessToken = this.jwtService.sign(payload);
      res.cookie('jwt', accessToken, {
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 3600000,
      });

      return {
        token: accessToken,
        isLoggedIn: true,
        user: userData,
      };
    });
  }

  public async register(
    user: User,
    @Res() res: Response,
  ): Promise<any | { status: number }> {
    try {
      user.password = this.hash(user.password);
      if (await this.userService.getUserByEmail(user.email)) {
        return {
          isLoggedIn: false,
          error: 'Cet email est déjà utilisé.',
        };
      }
      await this.userService.saveUser(user);
      const payload = `${user.email}`;

      const accessToken = this.jwtService.sign(payload);
      res.cookie('jwt', accessToken, {
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 3600000,
      });

      return {
        token: accessToken,
        isLoggedIn: true,
        user: user,
      };
    } catch (error) {
      console.error("Une erreur s'est produite lors de l'inscription :", error);
      return {
        isLoggedIn: false,
        error:
          "Une erreur s'est produite lors de l'inscription. Veuillez réessayer.",
      };
    }
  }

  public async logout(@Res() res: Response): Promise<any | { status: number }> {
    res.cookie('jwt', '', {
      httpOnly: true,
      sameSite: 'lax',
      expires: new Date(0),
    });
    res.status(200).send('Déconnecté avec succès');
  }

  async checkAuthentication(
    req: Request,
  ): Promise<{ isLoggedIn: boolean; user: User }> {
    const token = req.cookies['jwt'];
    if (!token) {
      return {
        isLoggedIn: false,
        user: null,
      };
    }
    try {
      const decodedToken = this.jwtService.verify(token);
      const email = decodedToken;
      const user = await this.userService.getUserByEmail(email);
      if (user) {
        return {
          isLoggedIn: true,
          user: user,
        };
      } else {
        return {
          isLoggedIn: false,
          user: null,
        };
      }
    } catch (error) {
      console.error('Erreur lors de la vérification du token :', error);
      return { isLoggedIn: false, user: null };
    }
  }

  /**
   * Hash the password in parameter.
   */
  private hash(password): string {
    return crypto.createHmac('sha256', password).digest('hex');
  }
}
