import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProgressbarComponent } from './components/progressbar/progressbar/progressbar.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SlideButtonComponent } from './components/slideButton/slide-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StringDatePipe } from './pipe/stringdate.pipe';
import { VisamasterPipe } from './pipe/visamaster.pipe';
import { CreditcardnumberPipe } from './pipe/creditcardnumber.pipe';


import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatSliderModule,
        MatSlideToggleModule,
        FontAwesomeModule,
        MatProgressBarModule
    ],

    declarations: [
        SidebarComponent,
        HeaderComponent,
        SlideButtonComponent,
        ProgressbarComponent,
        StringDatePipe,
        VisamasterPipe,
        CreditcardnumberPipe
    ],

    exports: [
        SidebarComponent,
        HeaderComponent,
        SlideButtonComponent,
        ProgressbarComponent,
        StringDatePipe,
        VisamasterPipe,
        CreditcardnumberPipe
    ]
})

export class sharedModule { }

