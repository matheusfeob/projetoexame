import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categoria/categoria.module';
import { HospedeModule } from './hospede/hospede.module';
import { QuartoModule } from './quarto/quarto.module';
import { ReservaModule } from './reserva/reserva.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CategoriaModule,
    HospedeModule,
    QuartoModule,
    ReservaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}