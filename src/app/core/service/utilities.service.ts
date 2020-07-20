import { Injectable } from '@angular/core';
import { Configuration } from '../../app.constants';

@Injectable()
export class UtilitiesService {
    constructor(configuration:Configuration) { 
    
    }
    
   GroutByProduct(arr, criteria)
    {   
        return arr.reduce((obj, item)=> { 
           // item.carcredit = 
            var key = item.accountInformation[criteria];
           
            let configuration = new Configuration();
            item.cardcredit =  configuration.isCreditCar(key)? true:false;
            
         
            if (!obj.hasOwnProperty(key)) {
                obj[key] = [];
            }
            // Push the value to the object
            obj[key].push(item);
            return obj;  
        },{});
    }

    GroutByProductAllProsuct(arr, criteria)
    {   
        let obj = {};
        let configuration = new Configuration();
        
         Object.values(arr).map(item =>{
         Object.values(item).forEach(element => {
                var key = element.accountInformation[criteria];
                
                element.cardcredit =  configuration.isCreditCar(key)? true:false;

                if (!obj.hasOwnProperty(key)) {
                    obj[key] = [];
                }
                // Push the value to the object
                obj[key].push(element); 
              });
        });
        return obj;
    }

}