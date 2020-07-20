import { Component, OnInit } from '@angular/core';
import { Product} from '../../../models/card-product-map';
// services 
import { LoadDataService } from 'src/app/core/service/load-data.service';
import { ProductService } from 'src/app/core/service/product.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
   allProducts: boolean = false;
   products:Array<Product>;
   classResponsive: string;
  constructor(private dataService : LoadDataService , private productService:ProductService ,private breakpointObserver: BreakpointObserver ) { }

  ngOnInit(): void {
    this.getAllData();
    this.isMobile();
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
      (data)=>this.products = data,
       error => console.log(error)
    );
    this.productService.getProducts(allProducts)     
  }


  isMobile()
  {
    this.breakpointObserver.observe('(max-width: 700px)').subscribe(result => {
      this.classResponsive = result.matches ? "cardItemContainerM": "cardItemContainer"; 
    });
  }


  
  
}
