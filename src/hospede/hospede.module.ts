import { Module } from '@nestjs/common';
import { HospedeService } from './hospede.service';
import { HospedeController } from './hospede.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hospede } from './entities/hospede.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hospede])],
  controllers: [HospedeController],
  providers: [HospedeService],
  exports: [HospedeService]
})
export class HospedeModule {}
