import { IsString, IsOptional, IsUrl } from 'class-validator';

export class CreateVisitDto {
  @IsUrl()
  url: string;

  @IsOptional()
  @IsUrl()
  referrer?: string;

  @IsString()
  browser: string;
}
