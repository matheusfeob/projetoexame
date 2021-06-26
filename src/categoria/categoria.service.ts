import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  create(categoria: Categoria): Promise<Categoria> {
    return this.categoriaRepository.save(categoria);
  }

  findOne(id: number): Promise<Categoria> {
    return this.categoriaRepository.findOne(+id);
  }

  findAll() {
    return this.categoriaRepository.find();
  }

  update(id: number, categoria: Categoria) {
    return this.categoriaRepository.update(+id, categoria);
  }

  remove(id: number) {
    return this.categoriaRepository.delete(+id);
  }
}
