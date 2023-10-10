import { IsEmail, IsString, Matches, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8, { message: 'Senha deve conter 8 digitos' })
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
    password: string;

    @IsString()
    picture: string;
}
