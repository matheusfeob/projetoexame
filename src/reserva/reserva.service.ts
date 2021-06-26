import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { Reserva } from './entities/reserva.entity';

@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(Reserva)
    private reservaRepository: Repository<Reserva>,
  ) {}

  create(reserva: Reserva): Promise<Reserva> {
    return this.reservaRepository.save(reserva);
  }

  findOne(id: number): Promise<Reserva> {
    return this.reservaRepository.findOne(+id);
  }

  findAll() {
    return this.reservaRepository.find();
  }

  update(id: number, reserva: Reserva) {
    return this.reservaRepository.update(+id, reserva);
  }

  remove(id: number) {
    return this.reservaRepository.delete(+id);
  }
}
