import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], propName: string): any[] {
    if (value.length === 0) {
      return value;
    }
    return value.sort((a: any, b: any): number => {
      if ( a[propName] < b[propName]) {
        return -1;
      }
      if (a[propName] > b[propName]) {
        return 1;
      }
      return 0;
    });
  }

}
