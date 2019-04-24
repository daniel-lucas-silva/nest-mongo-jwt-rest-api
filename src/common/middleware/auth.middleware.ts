import { NestMiddleware, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { UserService } from '../../user/user.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: any, res: any, next: () => void) {
    const authHeaders = req.headers.authorization;
    if (authHeaders && (authHeaders as string).split(' ')[1]) {

      const token = (authHeaders as string).split(' ')[1];
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET);
      const user = await this.userService.findById(decoded.id);

      if (user) { req.user = user; }
    }
    next();
  }
}
