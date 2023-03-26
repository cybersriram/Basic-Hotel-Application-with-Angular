import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreakFastComponent } from '../break-fast/break-fast.component';
import { DinnerComponent } from '../dinner/dinner.component';
import { ForminputComponent } from '../forminput/forminput.component';
import { LunchComponent } from '../lunch/lunch.component';

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
  {path:"dashboard",loadChildren: () => import('../dashboard/dashboard.module').then(x => x.DashBoardModule)},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }