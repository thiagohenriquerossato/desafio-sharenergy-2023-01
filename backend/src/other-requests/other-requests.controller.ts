import { Controller, Get, Param } from '@nestjs/common';
import { OtherRequestsService } from './other-requests.service';

@Controller()
export class OtherRequestsController {
  constructor(private readonly otherRequestsService: OtherRequestsService) {}

  @Get('get-http-code-picture/:code')
  getHttpCodePicture(@Param('code') code: string) {
    return this.otherRequestsService.getHttpCodePicture(code);
  }
}
