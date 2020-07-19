import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/card-product-map';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {
  @Input() ArrayProduct:Array<Product>;
  constructor() { }

  ngOnInit(): void {
    
  }

}
