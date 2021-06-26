import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuartoService } from './quarto.service';
import { CreateQuartoDto } from './dto/create-quarto.dto';
import { UpdateQuartoDto } from './dto/update-quarto.dto';
import { Quarto } from './entities/quarto.entity';

@Controller('quarto')
export class QuartoController {
  constructor(private readonly quartoService: QuartoService) {}

  @Post()
  create(@Body() quarto: Quarto) {
    return this.quartoService.create(quarto);
  }

  @Get()
  findAll() {
    return this.quartoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.quartoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() quarto: Quarto) {
    return this.quartoService.update(+id, quarto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.quartoService.remove(+id);
  }
}
