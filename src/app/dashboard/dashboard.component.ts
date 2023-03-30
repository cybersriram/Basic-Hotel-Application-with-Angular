import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { PaginationInstance } from "ngx-pagination";
import { ExampleService } from "../app.component";

@Component({
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  deletePost(id: number) {
    this.service.deleterec(id);
    window.location.reload();
  }
  InputDec: String = "Sriram";
  open: boolean = false;
  ngOnInit() {
    this.service.APIcall("BF").subscribe(
      (Res) => this.successGet(Res),
      (Res) => this.error(Res)
    );
    this.service.APIcall("LU").subscribe(
      (data) => {
        this.model["lunchdata"] = data;
      },
      (Res) => this.error(Res)
    );
    this.service.APIcall("DN").subscribe(
      (data) => {
        this.model["dinnerdata"] = data;
        console.log(this.model["dinnerdata"]);
      },
      (Res) => this.error(Res)
    );
  }
  sendData(event: any) {
    console.log(event);
  }
  successGet(Res: Object): void {
    this.model["breakfastdata"] = Res;
    // console.log(this.model['data'])
  }
  error(Res: any): void {
    this.open = true;
  }

  constructor(public http: HttpClient, private service: ExampleService) {}
  public config: PaginationInstance = {
    id: "my-pagination",
    itemsPerPage: 5,
    currentPage: 1,
  };
  public config1: PaginationInstance = {
    id: "my-pagination-Lunch",
    itemsPerPage: 5,
    currentPage: 1,
  };
  public config2: PaginationInstance = {
    id: "my-pagination-Lunch",
    itemsPerPage: 5,
    currentPage: 1,
  };
  public model: any = {
    breakfastdata: [],
    lunchdata: [],
    dinnerdata: [],
  };
  btnpress(){
    this.open = false
    location.reload()
  }
}
