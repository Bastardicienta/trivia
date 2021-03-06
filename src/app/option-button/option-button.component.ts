import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-option-button',
  templateUrl: './option-button.component.html',
  styleUrls: ['./option-button.component.css']
})
export class OptionButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() buttonText: string =""
  @Output() externalButtonAction: EventEmitter<any> = new EventEmitter()

  buttonAction(){
    this.externalButtonAction.emit()
  }
}
