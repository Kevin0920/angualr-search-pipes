import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allInfos: any, searchItem?: any): any {
    // check if search term is undefined
    if (!searchItem) {
      return allInfos;
    }
    else {
      // return search filter out array 
      return allInfos.filter(items => {
        return items.name.toLowerCase().includes(searchItem.toLowerCase());
      }) 
    }
  }

}
