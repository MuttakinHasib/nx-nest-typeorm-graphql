import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreatePetInput } from './create-pet.input';

@InputType()
export class UpdatePetInput extends PartialType(CreatePetInput) {
  @Field()
  id: string;
}
