import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'arayCommitFilter'})
export class ArrayFilterPipe implements PipeTransform {
  transform(array: any[], value: any, property: string): any {
    return array.filter(item => item.commit[property].toLowerCase().includes(value));
  }
}