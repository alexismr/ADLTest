import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent {

  title:string =" Tus Productos "
  toggle:boolean = false;
  titleProduct:string= "TUS PRODUCTOS" 
  options = ["PAGOS","TRANSFERENCIAS","CERTIFICADOS","SEGURIDAD"]
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}




  isMobile()
  {
    this.breakpointObserver.observe('(max-width: 700px)').subscribe(result => {
      //this.classResponsive = result.matches ? "headerM": "header"; 
    });
  }


  onToggle(){
    this.toggle = !this.toggle;
  }

}
