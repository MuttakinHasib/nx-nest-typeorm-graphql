import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from './entity/pet.entity';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private readonly petsRepository: Repository<Pet>
  ) {}

  async findAll(): Promise<Pet[]> {
    return await this.petsRepository.find();
  }

  async findOne(id: string): Promise<Pet> {
    return await this.petsRepository.findOneOrFail({ where: { id } });
  }

  async create(createPetInput: CreatePetInput): Promise<Pet> {
    const pet = this.petsRepository.create(createPetInput);
    return await this.petsRepository.save(pet);
  }

  // async update(updatePetInput: UpdatePetInput)  {
  //   const pet = this.petsRepository.update(
  //     { id: updatePetInput.id },
  //     updatePetInput
  //   );
  //   return await this.petsRepository.save(pet);
  // }
}
