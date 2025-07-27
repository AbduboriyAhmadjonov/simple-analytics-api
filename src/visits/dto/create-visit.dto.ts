import { IsString, IsOptional, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVisitDto {
  @ApiProperty({
    type: String,
    required: true,
    description: 'The URL of the visit',
  })
  @IsUrl()
  url: string;

  @ApiProperty({
    type: String,
    required: false,
    description: 'The referrer URL of the visit, if available',
  })
  @IsOptional()
  @IsUrl()
  referrer?: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'The user agent of the visit',
  })
  @IsString()
  browser: string;
}
