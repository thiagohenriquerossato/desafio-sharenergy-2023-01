import { Controller, Get, Query } from '@nestjs/common';
import { RandomUserService } from './random-user.service';

@Controller()
export class RandomUserController {
  constructor(private readonly randomUserService: RandomUserService) {}

  @Get('populate')
  populateRandomUser() {
    return this.randomUserService.getRandomUser();
  }

  @Get('random-users')
  getRandomUsers(@Query('start') start: number, @Query('limit') limit: number) {
    return this.randomUserService.listUsers(start, limit);
  }

  @Get('random-users/search')
  searchRandomUsers(@Query('searchTerm') searchTerm: string) {
    return this.randomUserService.searchUser(searchTerm);
  }
}
