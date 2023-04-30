import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './entity/pet.entity';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';

@Resolver()
export class PetsResolver {
  constructor(private readonly petsService: PetsService) {}

  @Query(() => Pet)
  async findOne(@Args('id', { type: () => String }) id: string) {
    return await this.petsService.findOne(id);
  }

  @Query(() => [Pet])
  async pets(): Promise<Pet[]> {
    return await this.petsService.findAll();
  }

  @Mutation(() => Pet)
  async createPet(
    @Args('createPetInput') createPetInput: CreatePetInput
  ): Promise<Pet> {
    return await this.petsService.create(createPetInput);
  }

  // @Mutation(() => Pet)
  // async updatePet(
  //   @Args('updatePetInput') updatePetInput: UpdatePetInput
  // ): Promise<Pet> {
  //   return await this.petsService.update(updatePetInput);
  // }
}
