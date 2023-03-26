import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-child',
    template: '<h1>{{test}}</h1><button (click)="sendData()"> Send Data </button> ',
    // styleUrls: ['./app.component.scss']
  })
  export class CommunicationComponent {
    @Input() test!  :String; 
    @Output() public s = new EventEmitter<String>();
    sendData(){
        this.s.emit(this.test);
    }
  }