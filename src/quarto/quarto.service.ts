import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuartoDto } from './dto/create-quarto.dto';
import { UpdateQuartoDto } from './dto/update-quarto.dto';
import { Quarto } from './entities/quarto.entity';

@Injectable()
export class QuartoService {
  constructor(
    @InjectRepository(Quarto)
    private createRepository: Repository<Quarto>,
  ) {}

  create(createQuartoDto: CreateQuartoDto) {
    return 'This action adds a new quarto';
  }

  findAll() {
    return `This action returns all quarto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quarto`;
  }

  update(id: number, updateQuartoDto: UpdateQuartoDto) {
    return `This action updates a #${id} quarto`;
  }

  remove(id: number) {
    return `This action removes a #${id} quarto`;
  }
}
