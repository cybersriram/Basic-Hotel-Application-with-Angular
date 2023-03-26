import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import {
  ButtonModule,
  ContentSwitcherModule,
  UIShellModule,
} from "carbon-components-angular";
import { breakFastModule } from "./break-fast/break-fast.module";
import { NavigatorModule } from "./navigator/navigator.module";
import { LunchModule } from "./lunch/lunch.module";
import { DinnerModule } from "./dinner/dinner.module";
import { ForminputComponent } from "./forminput/forminput.component";
import { AppRoutingModule } from "./routing/app.routing";
@NgModule({
  declarations: [AppComponent, ForminputComponent],
  imports: [
    BrowserModule,
    DinnerModule,
    NavigatorModule,
    breakFastModule,
    UIShellModule,
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
