import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SwagService } from './swag/swag.service';
import { SwagController } from './swag/swag.controller';

@Module({
  imports: [],
  controllers: [AppController, SwagController],
  providers: [AppService, SwagService],
})
export class AppModule {}
