import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';



import { HeaderComponent } from './components/header/header.component';
import { ProgressbarComponent } from './components/progressbar/progressbar/progressbar.component';
import { SlideButtonComponent } from './components/slideButton/slide-button.component';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';


import { StringDatePipe } from './pipe/stringdate.pipe';
import { VisamasterPipe } from './pipe/visamaster.pipe';
import { CreditcardnumberPipe } from './pipe/creditcardnumber.pipe';




@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatSliderModule,
        MatSlideToggleModule,
        FontAwesomeModule,
        MatProgressBarModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
  
    ],

    declarations: [
        HeaderComponent,
        SlideButtonComponent,
        ProgressbarComponent,
        StringDatePipe,
        VisamasterPipe,
        CreditcardnumberPipe,
        MainSidebarComponent
        
    ],

    exports: [
        HeaderComponent,
        SlideButtonComponent,
        ProgressbarComponent,
        StringDatePipe,
        VisamasterPipe,
        CreditcardnumberPipe,
        MainSidebarComponent
        
    ]
})

export class sharedModule { }

