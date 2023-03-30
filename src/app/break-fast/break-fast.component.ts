import {
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ExampleService } from "../app.component";
import { OrderDetailsforBreakFast } from "./break-fast.model";
import { HttpClient } from "@angular/common/http";
@Component({
  //   selector: 'app-break-fast',
  templateUrl: "./break-fast.component.html",
  styleUrls: ["./break-fast.component.scss"],
})
export class BreakFastComponent {
  breakfastObj: OrderDetailsforBreakFast = new OrderDetailsforBreakFast();
  //for radio box
  radioGroup2LegendText = "Select the Cuisine";
  radioGroup2Name = "radio-group-2";
  radio3Label = "North Indian";
  radio3Disabled = false;
  radio3Id = "radio-3";
  radio3Value = "NI";
  radio3Checked = false;

  radio4Label = "South Indian";
  radio4Disabled = false;
  radio4Id = "radio-4";
  radio4Value = "SI";
  radio4Checked = false;
  // for dropdown
  dropdown3Label = "Order Pls";
  dropdown3HelperText = "Select your Item";
  dropdown3Placeholder = "placeholder";
  dropdown3Invalid = false;
  dropdown3InvalidText = "";
  dropdown3Size = "md";
  mainlst = [
    { content: "Select", selected: true, disabled: true },
    { content: "Select the cuisine", selected: false },
  ];
  dropdown3Items = Object.assign([], this.mainlst);
  dropValue = new BehaviorSubject(this.dropdown3Items);
  //for quantity box
  numberInput2Value = 0;
  numberInput2Label = "Enter the Quantity Needed";
  numberInput2Min = 0;
  numberInput2Max = 100;
  numberInput2Step = 1;
  numberInput2Invalid = false;
  numberInput2InvalidText = false;
  numberInput2Warn = false;
  numberInput2Disabled = false;

  constructor(private service: ExampleService, public http: HttpClient) {}
  ngOnInit() {
    // console.log(this.service.breakfastBackup.name)
    this.breakfastObj.name = this.service.breakfastBackup.name;
    if (this.service.breakfastBackup.cuisine == "NI") {
      this.radio3Checked = true;
    } else if (this.service.breakfastBackup.cuisine == "SI") {
      this.radio4Checked = true;
    }
    this.numberInput2Value = this.service.breakfastBackup.qty;
    this.breakfastObj.cuisine = this.service.breakfastBackup.cuisine;
    this.dropdownOptions();
    this.dropValue.next(this.dropdown3Items);
  }
  changed() {
    this.service.breakfastBackup = this.breakfastObj;
  }
  radioGroup2ValueChange(event: any) {
    this.breakfastObj.cuisine = event.value;
    this.dropdownOptions();
    this.dropValue.next(this.dropdown3Items);
    // console.log(this.dropdown3Items);
  }
  dropdown3Selected(event: any) {
    this.breakfastObj.Itemselected = event.item.content;
    // console.log(this.breakfastObj.Itemselected, "Items", this.dropdown3Items);
  }
  numberInput2ValueChange(value: number) {
    this.breakfastObj.qty = value;
  }
  dropdownOptions() {
    if (this.breakfastObj.cuisine == "NI") {
      this.dropdown3Items = Object.assign([], this.mainlst);
      this.dropdown3Items.pop();
      this.dropdown3Items.push({ content: "Chapathi", selected: false }),
        this.dropdown3Items.push({ content: "Aloo Parata", selected: false });
    } else if (this.breakfastObj.cuisine == "SI") {
      this.dropdown3Items = Object.assign([], this.mainlst);
      this.dropdown3Items.pop();
      this.dropdown3Items.push({ content: "Idli Sambar", selected: false }),
        this.dropdown3Items.push({ content: "Pongal", selected: false });
    }
  }

  button2Clicked() {
    let output: JSON;
    let temp: String = "";
    if (this.breakfastObj.cuisine == "NI") temp = "North Indian";
    else if (this.breakfastObj.cuisine == "SI") temp = "South Indian";
    const obj = {
      mealTime: "BF",
      name: this.breakfastObj.name,
      cuisine: temp,
      selectedItem: this.breakfastObj.Itemselected,
      quantity: String(this.breakfastObj.qty),
    };
	
    this.http.post("http://localhost:3000/Orders", obj).subscribe(
      (Res) => this.success(Res),
      (Res) => this.error(Res)
    );
    output = <JSON>(<unknown>obj);
    // console.log(output)
  }
  success(Res: Object): void {
    console.log(Res);
  }
  error(Res: any): void {
    throw new Error("Method not implemented.");
  }
}

@Directive({
  selector: "[myBackgroundColor]",
})
export class BreakFastDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseenter') onmouse(){
	this.el.nativeElement.style.backgroundColor = 'red';
  }
}
