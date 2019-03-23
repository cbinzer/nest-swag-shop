import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SwagService } from './swag/swag.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SwagService],
})
export class AppModule {}
