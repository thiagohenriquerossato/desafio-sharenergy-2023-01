import { CreateClientDto } from 'src/client/dto/create-client.dto';
import { UpdateClientDto } from 'src/client/dto/update-client.dto';
import { Client } from 'src/client/entities/client.entity';

export interface IClientRepository {
  create(data: CreateClientDto): Promise<Client>;
  findAll(): Promise<Client[]>;
  findOne(id: number): Promise<Client>;
  update(id: number, client: UpdateClientDto): Promise<Client>;
  remove(id: number): Promise<void>;
}

export const IClientRepository = Symbol('IClientRepository');
