import { Module } from '@nestjs/common';
import { SwagModule } from './swag/swag.module';

@Module({
  imports: [
    SwagModule
  ]
})
export class AppModule {}
