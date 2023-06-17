import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceCategoryDto {
  @ApiProperty()
  public title: string;
  @ApiProperty()
  public description: string;
}
