// import { Injectable } from '@nestjs/common';
// import { User } from 'src/user/entities/user.entity';
// import { UserService } from 'src/user/user.service';

// @Injectable()
// export class AuthService {
//     constructor(private usersService: UserService) {}

//     async validateUser(
//         email: string,
//         password: string
//         ): Promise<{
//         id: string;
//         email: string;
//         name: string;
//         picture: string;
//         admin?: boolean;
//     } | null> {
//       const user = await this.usersService.findOne(email);
//       if (user && user.password === password) {
//         const { password, ...result } = user;
//         return result;
//       }
//       throw Error("Senha Incorreta!");
//     }
//   }

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<{
    id: string;
    email: string;
    name: string;
    picture: string;
    admin?: boolean;
  }> {
    const user = await this.usersService.findOne(undefined, email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    throw Error('Senha Incorreta!');
  }

  async login(user: User) {
    const payload = { username: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

