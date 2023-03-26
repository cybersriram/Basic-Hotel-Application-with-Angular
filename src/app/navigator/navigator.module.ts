import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common';
import {NavigatorComponent} from "./navigator.component";
import {RouterModule} from '@angular/router'
import { ButtonModule } from 'carbon-components-angular/button';
import { ContentSwitcherModule } from "carbon-components-angular";

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        ContentSwitcherModule,
    ],
    exports: [NavigatorComponent],
    declarations:[
        NavigatorComponent
    ]
  })
export class NavigatorModule { }