import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ExampleService } from '../app.component';
import { OrderDetailsforLunch } from './lunch.model';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.scss']
})
export class LunchComponent {
  //for radio box
  radioGroup2LegendText = "Select the Meal Type";
  radioGroup2Name = "radio-group-2";
  radio3Label = "Vegetarian";
  radio3Disabled = false;
  radio3Id = "radio-3";
  radio3Value = "VEG";
  radio3Checked = false;
  radioChecked_yes = false;
  radio4Label = "Non-Vegetarian";
  radio4Disabled = false;
  radio4Id = "radio-4";
  radio4Value = "NV";
  radio4Checked = false;
  radioChecked_no = false;
  radioGroup2ValueChange(event: any) {
    this.changed();
    this.LunchObj.mealType = event.value;
    this.dropdownOptions()
		this.dropValue.next(this.dropdown3Items);
    // console.log(this.dropdown3Items);
  }
  LunchObj : OrderDetailsforLunch = new OrderDetailsforLunch();
  // for dropdown
  dropdown3Label = "Order Pls";
  dropdown3HelperText = "Select your Item";
  dropdown3Placeholder = "placeholder";
  dropdown3Size = "md";
  dropdown3Disabled = false;
  dropdown3DropUp = false;
  dropdown3SelectionFeedback = "top-after-reopen";
  dropdown3Type: "single" | "multi" = "single";
  mainlst = [{ content: 'Select', selected: true, disabled: true },{ content: 'Select the cuisine', selected: false }];
  dropdown3Items  = Object.assign([], this.mainlst);
	dropValue = new BehaviorSubject(this.dropdown3Items)
  
  dropdown3Selected(event: any) {
    this.LunchObj.Itemselected = event.item.content;
  }
  name!: String;
  showTextArea(value: String) {
    if(value == 'false'){
      this.LunchObj.Orderreq = ""
      this.LunchObj.Orderreqbool = false
    }
    else if(value == 'true'){
      this.LunchObj.Orderreqbool = true
      // console.log("changed")
    }
    this.changed()
  }
  constructor(private service: ExampleService,public http : HttpClient) { }

  button2Clicked() {
    let temp : String = "";
		if(this.LunchObj.mealType == "VEG")
		temp = "Vegetarian"
		else if (this.LunchObj.mealType == "NV")
		temp = "Non Vegetarian"
    const obj = {
			'mealTime' : "LU",
			'name': this.LunchObj.name,
			'mealType': temp,
			'selectedItem': this.LunchObj.Itemselected,
			'Suggestions': this.LunchObj.Orderreq
		}
    this.http.post("http://localhost:3000/Orders",obj).subscribe(Res=>(this.success(Res)),Res=>(this.error(Res)));
  }
  changed(){
		this.service.LunchBackup = this.LunchObj;
	}
  success(Res: Object): void {
    console.log(Res)
  }
  error(Res: any): void {
    throw new Error('Method not implemented.');
  }
  
  ngOnInit(){
    // this.radioChecked_no = true;
		// console.log(this.service.breakfastBackup.name)
		this.LunchObj.name = this.service.LunchBackup.name;
		if (this.service.LunchBackup.mealType == 'NV'){
			this.radio4Checked = true
		}
		else if(this.service.LunchBackup.mealType == 'VEG'){
			this.radio3Checked = true
      // console.log(this.radio3Checked)
		}
		this.LunchObj.mealType = this.service.LunchBackup.mealType;
	    this.dropdownOptions() 
		this.dropValue.next(this.dropdown3Items);
    if(this.service.LunchBackup.Orderreq != ""){
      this.LunchObj.Orderreq = this.service.LunchBackup.Orderreq;
    }
    if(this.service.LunchBackup.Orderreqbool == true){
      this.radioChecked_yes = true
      this.showTextArea("true")
    }
	}

  dropdownOptions() {
		if (this.LunchObj.mealType == 'NV') {
			this.dropdown3Items  = Object.assign([], this.mainlst);
			this.dropdown3Items.pop();
			this.dropdown3Items.push({ content: 'Chicken Biryani', selected: false }),
				this.dropdown3Items.push({ content: 'Mutton Curry', selected: false })
		}
		else if (this.LunchObj.mealType == 'VEG') {
			this.dropdown3Items  = Object.assign([], this.mainlst);
			this.dropdown3Items.pop();
			this.dropdown3Items.push({ content: 'Paneer 65', selected: false }),
			this.dropdown3Items.push({ content: 'Curd Rice', selected: false })
		}
	}
}
