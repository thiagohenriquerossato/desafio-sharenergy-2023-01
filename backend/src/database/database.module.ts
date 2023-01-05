import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { IClientRepository } from './IClient-Repository.service';
import { ClientRepository } from './prisma/client-repository.service';

@Module({
  imports: [PrismaModule],
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
