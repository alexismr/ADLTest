import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NguCarouselModule } from '@ngu/carousel';


import { HomeRoutes } from './home.routes';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
        HomeRoutes,
        NguCarouselModule
    ],
    declarations: [

    ] ,
    exports: [
    ]
})

export class HomeModule { }

