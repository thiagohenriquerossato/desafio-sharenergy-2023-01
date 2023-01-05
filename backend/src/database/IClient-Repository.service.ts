import { CreateClientDto } from 'src/client/dto/create-client.dto';
import { UpdateClientDto } from 'src/client/dto/update-client.dto';
import { Client } from 'src/client/entities/client.entity';

export interface IClientRepository {
  create(data: CreateClientDto): Promise<Client>;
  findAll(): Promise<Client[]>;
  findOne(id: string): Promise<Client>;
  findOneByEmail(email: string): Promise<Client>;
  update(id: string, client: UpdateClientDto): Promise<Client>;
  remove(id: string): Promise<void>;
}

export const IClientRepository = Symbol('IClientRepository');
