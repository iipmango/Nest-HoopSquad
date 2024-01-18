import { IsNumber, IsString } from 'class-validator';

export class authDto {
  @IsString()
  readonly email: string;
  @IsString()
  readonly password: string;
}
