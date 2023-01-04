import { Module } from '@nestjs/common';
import { IClientRepository } from './IClient-Repository.service';
import { ClientRepository } from './inMemory/cliente-repository.service';

@Module({
  imports: [],
  providers: [
    {
      provide: IClientRepository,
      useClass: ClientRepository,
    },
  ],
  exports: [
    {
      provide: IClientRepository,
      useClass: ClientRepository,
    },
  ],
})
export class DatabaseModule {}
