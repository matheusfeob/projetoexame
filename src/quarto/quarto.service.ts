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
    private quartoRepository: Repository<Quarto>,
  ) {}

  create(quarto: Quarto): Promise<Quarto> {
    return this.quartoRepository.save(quarto);
  }

  findOne(id: number): Promise<Quarto> {
    return this.quartoRepository.findOne(+id);
  }

  findAll() {
    return this.quartoRepository.find();
  }

  update(id: number, quarto: Quarto) {
    return this.quartoRepository.update(+id, quarto);
  }

  remove(id: number) {
    return this.quartoRepository.delete(+id);
  }
}
