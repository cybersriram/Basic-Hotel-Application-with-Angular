import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import {
  ButtonModule,
  ContentSwitcherModule,
  UIShellModule,
} from "carbon-components-angular";
import { AppRoutingModule } from "./app.routing";
import { breakFastModule } from "./break-fast/break-fast.module";
import { NavigatorModule } from "./navigator/navigator.module";
import { LunchModule } from "./lunch/lunch.module";
import { DinnerModule } from "./dinner/dinner.module";
import { DashBoardModule } from "./dashboard/dashboard.module";
import { ForminputComponent } from "./forminput/forminput.component";
@NgModule({
  declarations: [AppComponent, ForminputComponent],
  imports: [
    DashBoardModule,
    BrowserModule,
    DinnerModule,
    NavigatorModule,
    breakFastModule,
    UIShellModule,
    ReactiveFormsModule,
    FormsModule,
    LunchModule,
    ButtonModule,
    ContentSwitcherModule,
    AppRoutingModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
