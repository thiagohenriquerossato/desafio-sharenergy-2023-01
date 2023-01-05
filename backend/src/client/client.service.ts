import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ObjectID } from 'bson';
import { IClientRepository } from 'src/database/IClient-Repository.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {
  constructor(
    @Inject(IClientRepository)
    private readonly clientRepository: IClientRepository,
  ) {}

  async create(createClientDto: CreateClientDto) {
    const clientExists = await this.clientRepository.findOneByEmail(
      createClientDto.email,
    );
    if (clientExists)
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
    return this.clientRepository.create(createClientDto);
  }

  findAll() {
    return this.clientRepository.findAll();
  }

  findOne(id: string) {
    if (!ObjectID.isValid(id)) {
      throw new HttpException('Invalid id', HttpStatus.BAD_REQUEST);
    }
    return this.clientRepository.findOne(id);
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    if (!ObjectID.isValid(id)) {
      throw new HttpException('Invalid id', HttpStatus.BAD_REQUEST);
    }
    const clientExists = await this.clientRepository.findOne(id);
    if (!clientExists) {
      throw new HttpException('Client not found', HttpStatus.NOT_FOUND);
    }
    const emailExists = await this.clientRepository.findOneByEmail(
      updateClientDto.email,
    );
    if (emailExists) {
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
    }

    return this.clientRepository.update(id, updateClientDto);
  }

  async remove(id: string) {
    if (!ObjectID.isValid(id)) {
      throw new HttpException('Invalid id', HttpStatus.BAD_REQUEST);
    }
    const clientExists = await this.clientRepository.findOne(id);
    if (!clientExists) {
      throw new HttpException('Client not found', HttpStatus.NOT_FOUND);
    }
    this.clientRepository.remove(id);
    return 'Deleted';
  }
}
