import { Component } from '@angular/core';
import { OrderDetailsforBreakFast } from './break-fast/break-fast.model';
import { Injectable } from "@angular/core";
import { OrderDetailsforLunch } from './lunch/lunch.model';
import { OrderDetailsforDinner } from './dinner/dinner.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}

@Injectable(
	{
		providedIn: "root"
	}
)
export class ExampleService {
  constructor(public http : HttpClient) { }
	breakfastBackup : OrderDetailsforBreakFast = new OrderDetailsforBreakFast();
  LunchBackup : OrderDetailsforLunch = new OrderDetailsforLunch();
  DinnerBackup : OrderDetailsforDinner = new OrderDetailsforDinner();
  APIcall(mT:String):Observable<any>{
    const url = "http://localhost:3000/Orders?mealTime="+mT
    return this.http.get(url)
  }
  deleterec(id:number){
    this.http.delete("http://localhost:3000/Orders/"+String(id))
  }
} 