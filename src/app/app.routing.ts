import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForminputComponent } from './forminput/forminput.component';
import { BreakFastComponent } from './break-fast/break-fast.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {
    path: 'form', component: ForminputComponent,
    children: [
      {
        path: 'breakFast', component: BreakFastComponent
      },
      {
        path: 'lunch', component: LunchComponent
      },
      {
        path: 'dinner', component: DinnerComponent
      }
    ],
  },
  {
    path: 'dashboard', component: DashboardComponent, 
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const ArrayOfComponents = [ForminputComponent]