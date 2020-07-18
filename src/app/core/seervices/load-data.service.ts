import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Product} from '../../models/card-product-map';





@Injectable()
export class LoadDataService {
  
    productList:Array<Product>;
    
    constructor(private http:HttpClient) { }
    
    getloadData() :Observable<string> {  
       return new Observable(subscriber => {
        this.http.get('../assets/data/data.json').subscribe( (data:any) =>{
            this.productList = this.groupByBank(data.product, "bank" )
            subscriber.next("OK");
           },
           error =>  subscriber.error(error),
           );
        });     
    }

    groupByBank (arr, criteria ) {  
        return arr.reduce((obj, item)=> {
            var key = item.accountInformation[criteria];
            if (!obj.hasOwnProperty(key)) {
                obj[key] = [];
            }
            // Push the value to the object
            obj[key].push(item);
            return obj;  
        },{});
    };
}