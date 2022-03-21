import { Injectable } from '@nestjs/common';
import { Field, ObjectType } from '@nestjs/graphql';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,

  } from 'typeorm';
  
  @Entity('pets')
  @Injectable()
  @ObjectType()
  export class PetEntity {
    @PrimaryGeneratedColumn()
    @Field()
    id: number;
  
    @Field()
    @Column({ type: 'varchar', length: 20 })
    name: string;
  

  }