import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common';
import { DashboardComponent } from "./dashboard.component";
import { NgxPaginationModule } from "ngx-pagination";
import { ButtonModule, ModalModule, TableModule } from "carbon-components-angular";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CommunicationComponent } from "../communicaton.component";
// import { ButtonModule } from 'carbon-components-angular/button';
// import { ContentSwitcherModule } from "carbon-components-angular";

@NgModule({
    imports: [
        CommonModule,
        NgxPaginationModule,
        TableModule,
        HttpClientModule,
        ButtonModule,
        FormsModule,
        ModalModule
    ],
    bootstrap: [DashboardComponent],
    exports: [DashboardComponent],
    declarations:[
        DashboardComponent,
        CommunicationComponent
    ]
  })
export class DashBoardModule { }