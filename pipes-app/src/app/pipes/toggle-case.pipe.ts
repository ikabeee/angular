import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class toggleCasePipe implements PipeTransform {
  transform(value: string, upper:boolean): string {
    return upper ? value.toUpperCase() : value.toLowerCase();
  }
}
