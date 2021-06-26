import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  create(@Body() categoria: Categoria) {
    return this.categoriaService.create(categoria);
  }

  @Get()
  findAll() {
    return this.categoriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.categoriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() categoria: Categoria) {
    return this.categoriaService.update(+id, categoria);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.categoriaService.remove(+id);
  }
}
