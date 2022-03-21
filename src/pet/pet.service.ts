import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PetEntity } from 'src/entity/pet.entity';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet';
import { UpdatePetInput } from './dto/update-pet';



@Injectable()
export class PetService {
  constructor(
    // Khai báo Repository để kết nối db
    @InjectRepository(PetEntity)
    private petRepo: Repository<PetEntity>,
  ) {}

  item() {
    return this.petRepo.find();
  }


  async createPet(obj:CreatePetInput): Promise<PetEntity>{
    const newPet = this.petRepo.create(obj);
    return this.petRepo.save(newPet)

  }

  async findOne(id){
    const  find = await this.petRepo.findOne(id);
    return find;
  }

  async updatePet(id, obj:UpdatePetInput): Promise<PetEntity>{
    const petUpdate = await this.petRepo.findOne(id);
    petUpdate.name = obj.name;

    return this.petRepo.save(petUpdate)
  }

  async delete(id): Promise<PetEntity>{
    const petDelete = await this.petRepo.findOne(id);

    return this.petRepo.remove(petDelete);
  }
}
