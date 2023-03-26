
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent {
  jstoday = '';
  Meridiem = '';
  //  btn1 : boolean = false;
  //   btn2 : boolean = false;
  //  btn3 : boolean = true;
  mealTime: String = "";
  // //select automatic meal time
  // selectMealTime(){
  //   this.Meridiem = formatDate(new Date(), 'a', 'en-US', '+0530');
  //   // console.log(this.Meridiem);
  //   if (this.Meridiem == "AM"){
  //     this.mealTime = "BreakFast";
  //     // console.log(formatDate(new Date(), 'dd-MM-yy a', 'en-US', '+0530'));
  //   }
  //   else{
  //     this.mealTime = "Lunch";
  //   }
  //   // this.router.navigate(['breakFast'], {relativeTo:this.route});
  // }
  // ngOnInit() {
  //   this.selectMealTime();
  // }
  constructor(private route: ActivatedRoute, private router: Router) { }
  ele = this.router.url.split('/').pop()
  selected(event: any) {
    this.mealTime = event.name;
    this.router.navigate(["../" + this.mealTime], { relativeTo: this.route });
  }
}
