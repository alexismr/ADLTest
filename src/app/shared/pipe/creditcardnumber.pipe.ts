import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcardnumber'
})
export class CreditcardnumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(!value) return '';
    if(args[0]){
       var result =  args[0].toString().match(/\d{1,4}/g);
       return 'XXXX XXXX XXXX ' + result.slice(-1).pop();
        
    }

    return value;
  }


}
