import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'


@Pipe({
  name: 'stringDate'
})
export class StringDatePipe implements PipeTransform {

  transform(date: any, args?: any): any {
    if(!date) return '';
    
    let d = new Date(date)
    return moment(d).format('DD/MM/YYYY')

  }

}
