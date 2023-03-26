import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DinnerComponent } from "./dinner.component";
import { ButtonModule, CheckboxModule, GridModule, ModalModule, NumberModule, TableModule } from "carbon-components-angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavigatorModule } from "../navigator/navigator.module";
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common'; 
@NgModule({
    declarations: [
        DinnerComponent
      ],
    imports: [
        RouterModule.forChild([{path:"form/dinner",component:DinnerComponent}]),
        NavigatorModule,
        ModalModule,
        CommonModule,
        NumberModule,
        ButtonModule,
        ReactiveFormsModule,
        FormsModule,
        NgxPaginationModule,
        TableModule ,
        GridModule, CheckboxModule
    ],
    exports:[
        DinnerComponent
    ],
    bootstrap: [DinnerComponent]
})
export class DinnerModule { }