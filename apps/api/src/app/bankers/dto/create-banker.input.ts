import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBankerInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
