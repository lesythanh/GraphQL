import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetEntity } from 'src/entity/pet.entity';
import { PetResolver } from './pet.resolver';
import { PetService } from './pet.service';

@Module({
  imports: [TypeOrmModule.forFeature([
    PetEntity
  ])],
  providers: [PetResolver, PetService]
})
export class PetModule {}
