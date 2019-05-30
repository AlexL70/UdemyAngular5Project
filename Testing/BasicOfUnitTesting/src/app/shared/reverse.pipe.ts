import { Pipe, PipeTransform } from '@angular/core';
import { Transform } from 'stream';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(val: string): string {
    return val.split('').reverse().join('');
  }
}
