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
  public findOne(@Param('id') id: number): Swag {
    return this.swagService.findOne(id);
  }

  @Put('/:id')
  public update(@Param('id') id: number, @Body() swag: Swag): void {
    swag.id = id;
    return this.swagService.update(swag);
  }

  @Delete('/:id')
  public delete(@Param('id') id: number): void {
    return this.swagService.delete(id);
  }

}
