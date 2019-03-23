import { Module } from '@nestjs/common';
import { SwagController } from './swag.controller';
import { SwagService } from './swag.service';

@Module({
  controllers: [
    SwagController
  ],
  providers: [
    SwagService
  ]
})
export class SwagModule {}
