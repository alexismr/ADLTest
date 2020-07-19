import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product} from '../../models/card-product-map';
import { Configuration } from 'src/app/app.constants';
import { UtilitiesService } from './utilities.service';





@Injectable()
export class LoadDataService {
  
    productList:Array<Product>;
    
    constructor(
        private http:HttpClient,
        private configuration: Configuration ,
        private utilitiesService :UtilitiesService
        )  { }
    
    getloadData() :Observable<string> {  
       return new Observable(subscriber => {
        this.http.get('../assets/data/data.json').subscribe( (data:any) =>{
            this.productList = this.utilitiesService.GroutByProduct(data.product,this.configuration.BackTypeFilter  )
            subscriber.next("OK");
           },
           error =>  subscriber.error(error),
           );
        });     
    }

}