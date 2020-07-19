import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slide-button',
  templateUrl: './slide-button.component.html',
  styleUrls: ['./slide-button.component.scss']
})
export class SlideButtonComponent implements OnInit {
 
  @Input() title = "Mostar otros Productos ";
  @Output() onChecked = new EventEmitter<boolean>();
    
  select = false;
  checked = false;
  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }


  onClick()
  {
    this.select =! this.select;
    this.onChecked.emit(this.select);
  }
  


}
