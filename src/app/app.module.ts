import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './calendar/day/day.component';
import { TooltipComponent } from './common/ui/tooltip/tooltip.component';
import { TooltipDirective } from './common/ui/tooltip/tooltip.directive';
import { SurpriseComponent } from './surprise/surprise.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent,
    TooltipComponent,
    TooltipDirective,
    SurpriseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
