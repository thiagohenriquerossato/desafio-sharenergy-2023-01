import { Module } from '@nestjs/common';
import { OtherRequestsController } from './other-requests.controller';
import { OtherRequestsService } from './other-requests.service';

@Module({
  imports: [],
  controllers: [OtherRequestsController],
  providers: [OtherRequestsService],
})
export class OtherRequestsModule {}
