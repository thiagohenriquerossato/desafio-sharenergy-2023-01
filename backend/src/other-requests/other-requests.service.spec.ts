import { Test, TestingModule } from '@nestjs/testing';
import { OtherRequestsService } from './other-requests.service';

describe('OtherRequestsService', () => {
  let service: OtherRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OtherRequestsService],
    }).compile();

    service = module.get<OtherRequestsService>(OtherRequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
