import { Component, OnInit } from '@angular/core';
import { faUserCircle ,faBell , faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faUserCircle = faUserCircle;
  faBell = faBell;
  faSignOutAlt = faSignOutAlt;

  classResponsive: string;

  constructor(private breakpointObserver: BreakpointObserver ) { }

  ngOnInit(): void {
     this.isMobile();
  }



  isMobile()
  {
    this.breakpointObserver.observe('(max-width: 700px)').subscribe(result => {
      this.classResponsive = result.matches ? "headerM": "header"; 
    });
  }


}
