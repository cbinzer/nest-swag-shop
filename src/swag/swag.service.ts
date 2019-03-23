import { Injectable } from '@nestjs/common';
import { Swag } from './swag.model';

@Injectable()
export class SwagService {

  private readonly swags: Swag[] = [
    { id: 1, title: 'Clean Code T-Shirt', description: 'T-Shirt mit Aufdruck: clean code, dirty mind' },
    { id: 2, title: 'Kugelschreiber', description: 'Hochwertiger Kugelschreiber in einer eleganten Form und Farbgebung.' },
    { id: 3, title: 'Hoodie', description: 'codecentric Hoodie mit praktischer Kapuze und zeitlosen, klassischen Design.' }
  ];

  public create(newSwag: Swag): Swag {
    newSwag.id = Math.max(...this.swags.map(swag => swag.id));
    this.swags.push(newSwag);

    return newSwag;
  }

  public findAll(): Swag[] {
    return this.swags;
  }

  public findOne(id: number): Swag {
    return this.swags.find(swag => id === swag.id);
  }

  public update(updatedSwag: Swag): void {
    const index: number = this.swags.findIndex(swag => updatedSwag.id === swag.id);
    if (index > -1) {
      this.swags[index] = updatedSwag;
    }
  }

  public delete(id: number): void {
    const index: number = this.swags.findIndex(swag => id === swag.id);
    if (index > -1) {
      this.swags.splice(index, 1);
    }
  }

}
