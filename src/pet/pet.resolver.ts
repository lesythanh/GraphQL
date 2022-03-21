import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PetEntity } from 'src/entity/pet.entity';
import { CreatePetInput } from './dto/create-pet';

import { PetDTO } from './dto/pet.dto';
import { UpdatePetInput } from './dto/update-pet';
import { PetService } from './pet.service';

@Resolver('Pet')
export class PetResolver {
    constructor(private petService: PetService) {}
  @Query(returns => [PetEntity])
  async petAll(): Promise<PetEntity[]> {
    return await this.petService.item();
  }   

  @Mutation(returns => PetEntity)
  createPet(@Args('createPetInput') obj: CreatePetInput): Promise<PetEntity>{
      return this.petService.createPet(obj)
  }

  @Query(returns => PetEntity)
  async find(@Args ('id', {type: () => Int}) id: number ): Promise<PetEntity> {
    return await this.petService.findOne(id);
  } 

  @Mutation(returns => PetEntity)
  updatePet(@Args('id', {type: () => Int}) id: number, @Args('updatePetInput') obj: UpdatePetInput): Promise<PetEntity>{
      return this.petService.updatePet(id,obj)
  }

  @Mutation(returns => Boolean)
  deletePet(@Args('id', {type: () =>Int}) id: number){

    this.petService.delete(id);
    return true;
  }
}