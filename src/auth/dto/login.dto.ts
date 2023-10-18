import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
    @ApiProperty({example: " thales2rosario@gmail.com"})
    email: string;

    @ApiProperty ({example: "@Ab123F"})
    password: string;
}
