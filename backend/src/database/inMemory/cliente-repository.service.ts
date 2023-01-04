import { Injectable } from '@nestjs/common';
import { CreateClientDto } from 'src/client/dto/create-client.dto';
import { UpdateClientDto } from 'src/client/dto/update-client.dto';
import { Client } from 'src/client/entities/client.entity';
import { IClientRepository } from '../IClient-Repository.service';

@Injectable()
export class ClientRepository implements IClientRepository {
  private clients: Client[] = [];

  public async create(data: CreateClientDto): Promise<Client> {
    const client = new Client();
    Object.assign(client, { id: this.clients.length + 1, ...data });
    this.clients.push(client);
    return client;
  }

  public async findAll(): Promise<Client[]> {
    return this.clients;
  }

  public async findOne(id: number): Promise<Client> {
    return this.clients.find((client) => client.id === id);
  }

  public async update(id: number, data: UpdateClientDto): Promise<Client> {
    const index = this.clients.findIndex((client) => client.id === id);
    Object.assign(this.clients[index], data);
    const client = this.clients[index];
    return client;
  }

  public async remove(id: number): Promise<void> {
    const index = this.clients.findIndex((client) => client.id === id);
    this.clients.splice(index, 1);
  }
}
