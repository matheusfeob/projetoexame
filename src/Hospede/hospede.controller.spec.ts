import { Test, TestingModule } from '@nestjs/testing';
import { HospedeController } from './hospede.controller';
import { HospedeService } from './hospede.service';

describe('HolidayController', () => {
  let controller: HospedeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HospedeController],
      providers: [HospedeService],
    }).compile();

    controller = module.get<HospedeController>(HospedeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
