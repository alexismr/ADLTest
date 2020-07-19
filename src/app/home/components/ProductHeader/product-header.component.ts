import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/seervices/product.service';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss']
})
export class ProductHeaderComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  onRefreshProducts($event:boolean){
    this.productService.getProducts($event);
  }

}
