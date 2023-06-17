import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  service_category_id: number;
  @ApiProperty({ description: 'Image Url', required: false })
  image: string;
}
