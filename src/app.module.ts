import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { PetModule } from './pet/pet.module';

@Module({
  imports: [
  GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'graphql',
      entities: ["dist/**/*.entity{.ts,.js}"],
      
      "migrationsTableName": "custom_migration_table",
      "migrations": ["migration/*.js"],
      "cli": {
          "migrationsDir": "migration"
      },
      synchronize: true,
      // logging:"all"
      // autoLoadEntities: true,
    }),
    PetModule
  ],
})
export class AppModule {}
