import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common';
import { DashboardComponent } from "./dashboard.component";
import { NgxPaginationModule } from "ngx-pagination";
import { ButtonModule, ModalModule, TableModule } from "carbon-components-angular";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommunicationComponent } from "../communicaton.component";
import { RouterModule } from "@angular/router";
import { Dashboardroute } from "../routing/dashboard.routing";

@NgModule({
    imports: [
        CommonModule,
        NgxPaginationModule,
        TableModule,
        HttpClientModule,
        ButtonModule,
        FormsModule,
        ModalModule,
        ReactiveFormsModule,
        RouterModule.forChild(Dashboardroute)
    ],
    bootstrap: [DashboardComponent],
    exports: [DashboardComponent],
    declarations:[
        DashboardComponent,
        CommunicationComponent
    ]
  })
export class DashBoardModule { }