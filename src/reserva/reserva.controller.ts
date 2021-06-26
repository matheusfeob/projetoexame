import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { Reserva } from './entities/reserva.entity';

@Controller('reserva')
export class ReservaController {
  constructor(private readonly reservaService: ReservaService) {}

  @Post()
  create(@Body() reserva: Reserva) {
    return this.reservaService.create(reserva);
  }

  @Get()
  findAll() {
    return this.reservaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.reservaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() reserva: Reserva) {
    return this.reservaService.update(+id, reserva);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.reservaService.remove(+id);
  }
}
