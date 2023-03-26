import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { ExampleService } from '../app.component';
import { OrderDetailsforDinner } from './dinner.model';

@Component({
  // selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.scss']
})
export class DinnerComponent {
  addons = ["Tomato", "Onion", "Paneer"]
  findtheIndex(name: String): number {
    for (let i = 0; i < this.model['data'].length; i++) {
      if (this.model['data'][i].selectedVal == name) {
        // console.log("I value", i);
        return i;
      }
    }
    return -1;
  }
  value (name : String) : number{
    let val : number = 0;
    if(name == "Tomato"){
      val = this.service.DinnerBackup.tomato_cnt;
    }
    else if(name == "Onion"){
      val = this.service.DinnerBackup.onion_cnt;
    }
    else if(name == "Paneer"){
      val = this.service.DinnerBackup.paneer_cnt;
    }
    return val
  }
  slno: number = 1
  checkbox2Checked = false;
  dinnerOBJ: OrderDetailsforDinner = new OrderDetailsforDinner();
  onChange(event: any) {
    console.log(event.source.name, event.checked);
    if (event.checked == true && this.findtheIndex(event.source.name) < 0) {
      this.model['data'].push({ id: this.slno++, selectedVal: event.source.name });
      if(event.source.name == "Tomato")
      this.dinnerOBJ.Tomato = true
      else if(event.source.name == "Onion")
      this.dinnerOBJ.Onion = true
      else if(event.source.name == "Paneer")
      this.dinnerOBJ.Paneer = true
      // console.log(this.model['data'])
    }

    else if (this.findtheIndex(event.source.name) >= 0) {
      // console.log({ id: this.findtheIndex(event.source.name) + 1, selectedVal: event.source.name });
      this.model['data'].splice(this.findtheIndex(event.source.name), 1);
      this.slno--;
    }
    this.dinnerOBJ.test = this.model['data'];
    // this.model['data'].pop({id:this.model['data'].length + 1,selectedVal:event.source.name});
  }
  // onIndeterminateChange(event: any) {
  //   console.log(event)
  // }
  changed(){
		this.service.DinnerBackup = this.dinnerOBJ;
	}
  public model: any = {
    data: []
  };
  val: any = {}
  numberInput2ValueChange(event: any) {
    try {
      this.val[event.source.id] = event.value
      if(event.source.id == "Tomato"){
        this.dinnerOBJ.tomato_cnt = event.value
      }
      else if(event.source.id == "Onion"){
        this.dinnerOBJ.onion_cnt = event.value
      }
      else if(event.source.id == "Paneer"){
        this.dinnerOBJ.paneer_cnt = event.value
      }
    } // SyntaxError
    catch (e) {
      console.log(event.target)

    }
  }
  public searchModel = {
    placeholder: 'Search'
  };

  public config: PaginationInstance = {
    id: 'my-pagination',
    itemsPerPage: 2,
    currentPage: 1
  };
  open = false
  button2Clicked() {

    for (let i = 0; i < this.addons.length; i++) {
      if (this.val[this.addons[i]] <= 0) {
        this.open = true
      }
    }
    if (this.open == false) {
      let output: any = {
        "mealTime": 'DN',
        "addon": this.val
      }
      this.http.post("http://localhost:3000/Orders", output).subscribe(Res => (this.success(Res)), Res => (this.error(Res)));
    }
  }
  constructor(private service: ExampleService,public http: HttpClient) { }
  success(Res: Object): void {
    console.log(Res);
  }
  error(Res: any): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(){
    this.dinnerOBJ = this.service.DinnerBackup;
    if (typeof this.service.DinnerBackup.test === 'undefined'){
      console.log("I am in")
      
    }
    else{
      console.log("value assigned")
      this.model['data'] = this.service.DinnerBackup.test
    }
    // console.log(this.model)
  }
}
