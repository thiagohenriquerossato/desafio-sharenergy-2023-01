import { Test, TestingModule } from '@nestjs/testing';
import { OtherRequestsController } from './other-requests.controller';

describe('OtherRequestsController', () => {
  let controller: OtherRequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OtherRequestsController],
    }).compile();

    controller = module.get<OtherRequestsController>(OtherRequestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
