import { Inject, Injectable } from '@nestjs/common';
import { IClientRepository } from 'src/database/IClient-Repository.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {
  constructor(
    @Inject(IClientRepository)
    private readonly clientRepository: IClientRepository,
  ) {}

  create(createClientDto: CreateClientDto) {
    return this.clientRepository.create(createClientDto);
  }

  findAll() {
    return this.clientRepository.findAll();
  }

  findOne(id: number) {
    return this.clientRepository.findOne(id);
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.clientRepository.update(id, updateClientDto);
  }

  remove(id: number) {
    this.clientRepository.remove(id);
    return 'Deleted';
  }
}
