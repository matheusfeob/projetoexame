import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HospedeService } from './hospede.service';
import { CreateHospedeDto } from './dto/create-hospede.dto';
import { UpdateHospedeDto } from './dto/update-hospede.dto';
import { Hospede } from './entities/hospede.entity';

@Controller('hospede')
export class HospedeController {
  constructor(private readonly hospedeService: HospedeService) {}

  @Post()
  create(@Body() hospede: Hospede) {
    return this.hospedeService.create(hospede);
  }

  @Get()
  findAll() {
    return this.hospedeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.hospedeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() hospede: Hospede) {
    return this.hospedeService.update(+id, hospede);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.hospedeService.remove(+id);
  }
}
