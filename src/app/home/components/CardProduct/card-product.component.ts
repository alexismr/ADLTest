import { Component, OnInit, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from 'src/app/models/card-product-map';
import { faCreditCard ,faCertificate , faAddressCard, faIdCard, faWindowRestore,faInfo} from '@fortawesome/free-solid-svg-icons';
import { Configuration } from 'src/app/app.constants';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
  ,
  
})
export class CardProductComponent implements OnInit {
  @Input() ArrayProduct:Array<Product>;
 
  faCreditCard = faCreditCard;
  faCertificate = faCertificate;
  faAddressCard = faAddressCard;
  faIdCard = faIdCard;
  faWindowRestore= faWindowRestore;
  faInfo=faInfo;



  constructor( private configuration: Configuration ,
     private currencyPipe: CurrencyPipe) { }

  ngOnInit(): void {


   }

   onLoadImg(imgKey :string){
     return this[this.configuration.getImgProduct(imgKey)];
   }


  toggleClass(item) {
    item.isShown = !item.isShown;
 }

 onValidateCoverage(cupototal:number , totalpagar:number):number
 {
  return cupototal && totalpagar? Math.round(((totalpagar/ cupototal)*100)):0;
 }

   

}
