import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcardnumber'
})
export class CreditcardnumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(!value) return '';
    if(args[0]){
<<<<<<< HEAD
       var result =  value.toString().match(/\d{1,4}/g);
=======
       var result =  args[0].toString().match(/\d{1,4}/g);
>>>>>>> 03f0c293ffab4826223772c7452af31b31d72e02
       return 'XXXX XXXX XXXX ' + result.slice(-1).pop();
        
    }

    return value;
  }


}
