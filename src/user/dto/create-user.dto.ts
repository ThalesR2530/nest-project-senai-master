import {ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Matches, MinLength } from "class-validator";

export class CreateUserDto { 
  @ApiProperty({example:"Izumi Miyamura" })
    @IsString()
    name: string;

  @ApiProperty({example:"izume23miyamura@gmail.com"})
    @IsEmail()
    email: string;

  @ApiProperty({example:"Pacifier45@"})
    @IsString()
    @MinLength(8, { message: 'Senha deve conter 8 digitos' })
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
    password: string;

   @ApiProperty({example:"https://www.santos.sp.gov.br/static/files_www/styles/newspagemodal/public/field/image/generic.jpg"})
    @IsString()
    picture: string;
}
