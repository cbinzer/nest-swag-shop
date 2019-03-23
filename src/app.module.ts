import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SwagService } from './swag/swag.service';
import { SwagController } from './swag/swag.controller';
import { SwagModule } from './swag/swag.module';

@Module({
  imports: [SwagModule],
  controllers: [AppController, SwagController],
  providers: [AppService, SwagService],
})
export class AppModule {}
