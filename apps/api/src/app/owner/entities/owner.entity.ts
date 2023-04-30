import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pet } from '../../pets/entity/pet.entity';

@Entity()
@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Pet, (pet) => pet.owner, { cascade: true })
  @Field(() => [Pet], { nullable: true })
  pets: Pet[];
}
