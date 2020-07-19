import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/app.constants';
import { Observable, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { LoadDataService } from './load-data.service';
import { Product } from 'src/app/models/card-product-map';
import { UtilitiesService } from './utilities.service';



@Injectable()
export class ProductService {
    products:Array<Product>;
    constructor( 
        private configuration: Configuration ,
        private loadDataService: LoadDataService,
        private utilitiesService :UtilitiesService) {
         
        }

        getProducts(flagAllBanks: boolean):Array<Product>{     
           
            debugger;
           // if(!flagAllBanks)
            this.products = this.loadDataService.productList[this.configuration.DefaultProduct];
           let validate =   this.utilitiesService.GroutByProduct(this.products ,"productType" );
            return this.loadDataService.productList[this.configuration.DefaultProduct];
       }







    
}