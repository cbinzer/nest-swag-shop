import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SwagService } from './swag.service';
import { Swag } from './swag.model';

@Controller('swags')
export class SwagController {

  public constructor(private swagService: SwagService) { }

  @Post()
  public create(@Body() newSwag: Swag): Swag {
    return this.swagService.create(newSwag);
  }

  @Get()
  public findAll(): Swag[] {
    return this.swagService.findAll();
  }

  @Get('/:id')
  public findOne(@Param('id') id: string): Swag {
    return this.swagService.findOne(Number(id));
  }

  @Put('/:id')
  public update(@Param('id') id: string, @Body() swag: Swag): void {
    swag.id = Number(id);
    return this.swagService.update(swag);
  }

  @Delete('/:id')
  public delete(@Param('id') id: string): void {
    return this.swagService.delete(Number(id));
  }

}
