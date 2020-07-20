import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {LayoutModule} from '@angular/cdk/layout';

import {CoreModule } from './core/coreModule';
import {sharedModule } from './shared/sharedModule';
import {HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CoreModule.forRoot(),
    BrowserAnimationsModule,
    LayoutModule,
    sharedModule,
    HomeModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
