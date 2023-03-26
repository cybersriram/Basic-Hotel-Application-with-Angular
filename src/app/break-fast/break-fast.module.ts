import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BreakFastComponent } from "./break-fast.component";
import { ButtonModule, DropdownModule, InputModule, NumberModule, RadioModule } from "carbon-components-angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavigatorModule } from "../navigator/navigator.module";
import {HttpClientModule} from '@angular/common/http';
@NgModule({
    declarations: [
        BreakFastComponent
      ],
    imports: [
        RouterModule.forChild([{path:"form/breakFast",component:BreakFastComponent}]),
        RadioModule,
        HttpClientModule,
        InputModule,NavigatorModule,
        DropdownModule,
        NumberModule,
        ButtonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports:[
        BreakFastComponent
    ],
    bootstrap: [BreakFastComponent]
})
export class breakFastModule { }