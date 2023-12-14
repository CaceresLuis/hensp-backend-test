import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateMedicineDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsInt()
  @IsPositive()
  stock: number;
}
