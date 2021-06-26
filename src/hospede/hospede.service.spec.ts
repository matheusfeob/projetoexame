import { Test, TestingModule } from '@nestjs/testing';
import { HospedeService } from './hospede.service';

describe('HolidayService', () => {
  let service: HospedeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HospedeService],
    }).compile();

    service = module.get<HospedeService>(HospedeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
