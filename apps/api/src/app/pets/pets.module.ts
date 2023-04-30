import { TypeOrmModule } from '@nestjs/typeorm';
import { PetsService } from './pets.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { Pet } from './entity/pet.entity';
import { PetsResolver } from './pets.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  providers: [PetsResolver, PetsService],
})
export class PetsModule {}
