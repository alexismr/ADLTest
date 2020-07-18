import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide-button',
  templateUrl: './slide-button.component.html',
  styleUrls: ['./slide-button.component.scss']
})
export class SlideButtonComponent implements OnInit {
 
  @Input() title = "Mostar otros Productos ";
 
  color: "blue";
  checked = false;
  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
