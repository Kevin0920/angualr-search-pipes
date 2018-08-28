import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // check if search term is undefined
    if (!args) {
      return value;
    }
    else {
      // return search filter out array 
      return value.filter(items => {
        return items.name.toLowerCase().includes(args.toLowerCase());
      }) 
    }
  }

}
