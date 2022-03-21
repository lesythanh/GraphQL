// import { ObjectType, Field, ID } from 'type-graphql';

import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PetDTO {
  @Field(type => ID)
  id: number;

  @Field(type => String)
  name: string;

}