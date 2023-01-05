import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [ClientModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
