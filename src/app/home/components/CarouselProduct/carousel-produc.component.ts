import { Component, OnInit, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-carousel-produc',
  templateUrl: './carousel-produc.component.html',
  styleUrls: ['./carousel-produc.component.scss']
})
export class CarouselProducComponent implements OnInit {
   @ViewChild('carousel') carousel: NguCarousel<any>;
 
  tittle = 'En Producto de Ahorro';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;
  carouselConfig:NguCarouselConfig;
  carouselItems : any[];
  pointNumbers:number[]= [1,2,3];
  constructor() {}


    ngOnInit(){
      this.carouselConfig = {
        grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
        load: 3,
        interval: {timing: 4000, initialDelay: 1000},
        loop: true,
        touch: true,
        velocity: 0.2
      }
      this.carouselItems = [1, 2, 3];
    }

    moveTo(slide) {
     console.log(slide)
       //this.carousel.moveTo(slide, !this.withAnim);
    }

}
