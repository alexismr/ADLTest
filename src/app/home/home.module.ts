import { CommonModule ,DatePipe, CurrencyPipe} from '@angular/common';


import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NguCarouselModule } from '@ngu/carousel';


import { HomeRoutes } from './home.routes';
import { ProductHeaderComponent } from './components/ProductHeader/product-header.component';
import { ProductsComponent } from './components/Products/products.component';
import { CardProductComponent } from './components/CardProduct/card-product.component';
import { sharedModule } from '../shared/sharedModule';
import { CarouselProducComponent } from './components/CarouselProduct/carousel-produc.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
        HomeRoutes,
        sharedModule,
        NguCarouselModule,
        FontAwesomeModule
    ],
    declarations: [
        ProductHeaderComponent,
        ProductsComponent,
        CardProductComponent,
        CarouselProducComponent
    ] ,
    exports: [
        ProductsComponent
    ],
    providers: [
        DatePipe,
        CurrencyPipe
    ]
    
})

export class HomeModule { }

