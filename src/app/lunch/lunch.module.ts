import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LunchComponent } from "./lunch.component";
import { ButtonModule, DropdownModule, InputModule, RadioModule } from "carbon-components-angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavigatorModule } from "../navigator/navigator.module";
import { CommonModule } from '@angular/common'; 
@NgModule({
    declarations: [
        LunchComponent
      ],
    imports: [
        RouterModule.forChild([{path:"form/lunch",component:LunchComponent}]),
        RadioModule,
        CommonModule,
        InputModule,NavigatorModule,
        DropdownModule,
        ButtonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports:[
        LunchComponent
    ],
    bootstrap: [LunchComponent]
})
export class LunchModule { }