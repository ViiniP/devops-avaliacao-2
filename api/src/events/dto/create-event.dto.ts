import { IsDateString, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({ example: 'Conferência DevOps 2025' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  title: string;

  @ApiProperty({ example: '2025-09-20T09:00:00Z' })
  @IsDateString()
  starts_at: Date;

  @ApiProperty({ example: '2025-09-20T18:00:00Z' })
  @IsDateString()
  ends_at: Date;

  @ApiProperty({ example: 'Auditório Central - Criciúma' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  location: string;
}
