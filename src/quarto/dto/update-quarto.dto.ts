import { PartialType } from '@nestjs/mapped-types';
import { CreateQuartoDto } from './create-quarto.dto';

export class UpdateQuartoDto extends PartialType(CreateQuartoDto) {}
