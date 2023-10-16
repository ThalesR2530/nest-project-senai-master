import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
 import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [UserModule],
  providers: [AuthService]
})
export class AuthModule {}

