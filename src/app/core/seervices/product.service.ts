import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/app.constants';
import { LoadDataService } from './load-data.service';
import { Product } from 'src/app/models/card-product-map';

@Injectable()
export class ProductService {
    constructor( 
        private configuration: Configuration ,
        private loadDataService: LoadDataService) {}

        getlist():Array<Product>{
            return  this.loadDataService.productList;
       }

    
}