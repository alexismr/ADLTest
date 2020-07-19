import { Component, OnInit } from '@angular/core';
import { faUserCircle ,faBell , faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faUserCircle = faUserCircle;
  faBell = faBell;
  faSignOutAlt = faSignOutAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
