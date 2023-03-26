import { Component,OnInit} from '@angular/core';
import {formatDate } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // selector: 'app-content-switcher',
  template: '',
})
export class ForminputComponent implements OnInit{
  jstoday = '';
  Meridiem = '';
  mealTime : String = ""; 
  g : String = "BreakFast"
  //select automatic meal time
  selectMealTime(){
    this.Meridiem = formatDate(new Date(), 'a', 'en-US', '+0530');
    // console.log(this.Meridiem);
    if (this.Meridiem == "AM"){
      this.mealTime = "breakFast";
      // console.log(formatDate(new Date(), 'dd-MM-yy a', 'en-US', '+0530'));
    }
    else{
      this.mealTime = "lunch";
    }
    this.router.navigate([this.mealTime], {relativeTo:this.route});
  }
  ngOnInit() {
    this.selectMealTime();
  }
  constructor(private route: ActivatedRoute, private router: Router) { }
  // selected(event : any){
  //   this.mealTime = event.name;
  //   this.selectMealTime();
  //   this.router.navigate(['breakFast'], {relativeTo:this.route});
  // }
}
