import { Injectable } from '@angular/core';


@Injectable()
export class UtilitiesService {
    constructor() { }
    
   GroutByProduct(arr, criteria)
    {   
        return arr.reduce((obj, item)=> {
            var key = item.accountInformation[criteria];
            if (!obj.hasOwnProperty(key)) {
                obj[key] = [];
            }
            // Push the value to the object
            obj[key].push(item);
            return obj;  
        },{});
    }

}