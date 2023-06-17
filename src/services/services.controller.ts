import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from "@nestjs/common";
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from "../decorators/auth/auth.decorator";

@ApiBearerAuth()
@ApiTags('services')
@Controller('services')
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}
  @Post()
  create(@Body() createServiceDto: CreateServiceDto, @Req() req: Request) {
    return this.servicesService.create(createServiceDto, req);
  }

  @Public()
  @Get()
  findAll() {
    return this.servicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicesService.findOne(id).then((xd) => xd[0]);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.servicesService.update(id, updateServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesService.remove(+id);
  }
}
