import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    this.prismaService.user
      .create({ data: createUserDto })
      .then((res) => {
        console.log('Usuário cadastrado');
        return res;
      })
      .catch((error) => {
        throw Error(`Error ao cadastrar usuário: ${error}`);
      });
  }

  async findAll() {
    const data: Promise<User[]> = this.prismaService.user.findMany();
    (await data).forEach((element) => {
      delete element.password;
    });

    return data;
  }

  async findOne(id: string) {
    try {
      const data: User = await this.prismaService.user.findUnique({
        where: { id },
      });
      delete data.password;
      return data;
    } catch (error) {
      return 'Id de usuário não existente!';
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const data: User = await this.prismaService.user.update({
        where: { id },
        data: updateUserDto,
      });

      delete data.password;
    } catch (error) {
      return 'id de usuário não existente!';
    }
  }

  async remove(id: string){
  try {
    const data: User = await this.prismaService.user.delete({where: {id} });
  } catch (error) {
    return "Id de usuário não existente!"
    } 
  }
}


