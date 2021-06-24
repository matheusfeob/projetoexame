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

  create(createHospedeDto: CreateHospedeDto) {
    return 'This action adds a new hospede';
  }

  findAll() {
    return `This action returns all hospede`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hospede`;
  }

  update(id: number, updateHospedeDto: UpdateHospedeDto) {
    return `This action updates a #${id} hospede`;
  }

  remove(id: number) {
    return `This action removes a #${id} hospede`;
  }
}
