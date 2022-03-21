import { PetEntity } from 'src/entity/pet.entity';
import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UpdatePetInput extends PetEntity{

    @Field()
    name: string;
}