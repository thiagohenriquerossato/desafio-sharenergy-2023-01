import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateClientDto } from 'src/client/dto/create-client.dto';
import { UpdateClientDto } from 'src/client/dto/update-client.dto';
import { Client } from 'src/client/entities/client.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { IClientRepository } from '../IClient-Repository.service';

@Injectable()
export class ClientRepository implements IClientRepository {
  constructor(private prisma: PrismaService) {}
  findOneByEmail(email: string): Promise<Client> {
    return this.prisma.client.findFirst({ where: { email } });
  }

  async create(data: CreateClientDto): Promise<Client> {
    return this.prisma.client.create({ data });
  }
  findAll(): Promise<Client[]> {
    return this.prisma.client.findMany();
  }
  findOne(id: string): Promise<Client> {
    return this.prisma.client
      .findUniqueOrThrow({ where: { id } })
      .catch((err) => {
        if (err.name === 'NotFoundError') {
          throw new HttpException('Client not found', HttpStatus.BAD_REQUEST);
        } else {
          throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
      });
  }
  update(id: string, data: UpdateClientDto): Promise<Client> {
    return this.prisma.client.update({ where: { id }, data });
  }
  async remove(id: string): Promise<void> {
    await this.prisma.client.delete({ where: { id } });
  }
}
