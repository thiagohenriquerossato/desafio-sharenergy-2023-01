import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { DatabaseModule } from 'src/database/database.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [DatabaseModule, PrismaModule],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
