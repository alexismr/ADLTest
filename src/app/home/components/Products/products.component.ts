import { Component, OnInit } from '@angular/core';
import { Product} from '../../../models/card-product-map';
// services 
import { LoadDataService } from 'src/app/core/seervices/load-data.service';
import { ProductService } from 'src/app/core/seervices/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  private allProducts: boolean = false;
  products:Array<Product>;

  constructor(private dataService : LoadDataService , private productService:ProductService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  private getAllData(): void {
    this.dataService
      .getloadData$().subscribe(
         () => this.getProducts(this.allProducts),
         error => console.log(error)
         );
  }

  private getProducts(allProducts: boolean)
  {
    this.productService.refresDataroduct$.subscribe(
      (data)=>{
        this.products = data
      } ,
       error => console.log(error)
    );

    this.productService.getProducts(allProducts)
      

  }


  
  
}
