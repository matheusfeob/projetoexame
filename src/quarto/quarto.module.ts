import { Module } from '@nestjs/common';
import { QuartoService } from './quarto.service';
import { QuartoController } from './quarto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quarto } from './entities/quarto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quarto])],
  controllers: [QuartoController],
  providers: [QuartoService]
})
export class QuartoModule {}
