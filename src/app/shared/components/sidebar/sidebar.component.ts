
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{


  titleProduct:string= "TUS PRODUCTOS" 
  options = ["PAGOS","TRANSFERENCIAS","CERTIFICADOS","SEGURIDAD"]
  isMenuOpen:boolean = false;
  constructor() {
    
  }

  ngOnInit() {
  }

  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
  
  public onToggleSidenav = () => { 
 
  }

}
