import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CalendarComponent} from "./calendar/calendar.component";
import {SurpriseComponent} from "./surprise/surprise.component";

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'calendar/day/:day', component: SurpriseComponent },
  { path: '', redirectTo: 'calendar', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
