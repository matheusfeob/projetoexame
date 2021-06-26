import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHospedeDto } from './dto/create-hospede.dto';
import { UpdateHospedeDto } from './dto/update-hospede.dto';
import { Hospede } from './entities/hospede.entity';

@Injectable()
export class HospedeService {
  constructor(
    @InjectRepository(Hospede)
    private hospedeRepository: Repository<Hospede>,
  ) {}

  create(hospede: Hospede): Promise<Hospede> {
    return this.hospedeRepository.save(hospede);
  }

  findOne(id: number): Promise<Hospede> {
    return this.hospedeRepository.findOne(+id);
  }

  findAll() {
    return this.hospedeRepository.find();
  }

  update(id: number, hospede: Hospede) {
    return this.hospedeRepository.update(+id, hospede);
  }

  remove(id: number) {
    return this.hospedeRepository.delete(+id);
  }
}
