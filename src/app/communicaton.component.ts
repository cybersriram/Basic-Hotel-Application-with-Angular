import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Observable } from "rxjs";

@Component({
    selector: 'app-child',
    template: '<h1>{{test}}</h1><button (click)="sendData()"> Send Data </button> ',
    // styleUrls: ['./app.component.scss']
  })
  export class CommunicationComponent {
    @Input() test  :String = ""; 
    @Output() public s = new EventEmitter<String>();
    sendData(){
        this.s.emit(this.test);
    }
    ngOnInit(){
      let promise = new Promise((resolve, reject) => { 
        console.log(this.test)
        if(this.test == "Sriram"){
          resolve("Name is Sriram by promise")
          // resolve("Name was Sriram by promise")
        }
        else{
          reject("Name is not Sriram")
        }
      })
      promise.then(res => console.log(res))

      let obs = new Observable((subscriber) =>{
        setTimeout(() => {
          subscriber.next("Name is Sriram by Observable")
          subscriber.next("Name is Shivaram by Observable")
          subscriber.complete()
          subscriber.next("Name was Shivaram by Observable")
        },100)
      })
      obs.subscribe(
        (success)=>{
          console.log(success)
        }
      )
    }
    
  }