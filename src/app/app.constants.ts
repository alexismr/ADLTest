import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server = 'cadena de conexion api';
    public DefaultProduct = 'BANCO_1';
    public ProductTypeFilter = "productType";
    public BackTypeFilter = "bank";

   public getImgProduct( productType: string): string{

          let vales = {
            CERTIFIED_DEPOSIT_TERM:"faCreditCard",
            CREDIT:"faCertificate",
            CREDIT_CARD:"faAddressCard",
            CURRENT_ACCOUNT:"faIdCard",
            DEPOSIT_ACCOUNT:"faWindowRestore",
            DEFAULT:"faInfo"
          }
         return   vales[productType] ? vales[productType] :vales.DEFAULT; 
   }

   public  isCreditCar(cardType):boolean
   {
         let  credicar = "CREDIT_CARD";
         return cardType == credicar;
   }

   getProductFilter(){
      return this.ProductTypeFilter;
  }

}