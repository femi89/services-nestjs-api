import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty()
  password: 'table';
  @ApiProperty()
  email: 'ado@email.com';
  @ApiProperty()
  firstName: 'john';
  @ApiProperty()
  lastName: 'doe';
}
