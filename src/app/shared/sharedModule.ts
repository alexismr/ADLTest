import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SlideButtonComponent } from './components/slideButton/slide-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatSliderModule,
        MatSlideToggleModule,
        FontAwesomeModule
    ],

    declarations: [
        SidebarComponent,
        HeaderComponent,
        SlideButtonComponent
    ],

    exports: [
        SidebarComponent,
        HeaderComponent,
        SlideButtonComponent
    ]
})

export class sharedModule { }

