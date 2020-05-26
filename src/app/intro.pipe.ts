import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intro'
})
export class IntroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
