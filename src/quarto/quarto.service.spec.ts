import { Test, TestingModule } from '@nestjs/testing';
import { QuartoService } from './quarto.service';

describe('HolidayService', () => {
  let service: QuartoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuartoService],
    }).compile();

    service = module.get<QuartoService>(QuartoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
