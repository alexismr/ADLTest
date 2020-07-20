import { Pipe, PipeTransform } from '@angular/core';
 import { Configuration } from 'src/app/app.constants';

@Pipe({
  name: 'visamaster'
})
export class VisamasterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]  ): unknown {
       if(!value) return '';
       if(args[0]){
          var result =  args[1].toString().match(/\d{1,4}/g);
          return  (Number(result[0]) >= 4026 && Number(result[0])<5000)? value + " VISA " : value + " MASTERCARD " 
       }
       return value;
  }



  

}
