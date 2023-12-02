import {Component} from '@angular/core';
import {Calendar, DATA} from "./calendar-data";
import {Router} from "@angular/router";

export const OPENED_DAYS_KEY = 'openedDays';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  data: Calendar[] = DATA;

  openedDays: number[] = [];

  constructor(private router: Router) {
    this.openedDays = JSON.parse(localStorage.getItem(OPENED_DAYS_KEY) || '[]');
  }

  open(data: Calendar): void {
    const currentDayOfMonth = new Date().getDate();
    if (data.day > currentDayOfMonth) {
      alert('You can\'t open this day yet...');
      return;
    }
    if (!this.isOpened(data.day)) {
      this.openedDays.push(data.day);
    }
    localStorage.setItem(OPENED_DAYS_KEY, JSON.stringify(this.openedDays));
    this.router.navigate(["calendar/day/" + data.day]);
    if (this.openedDays.length === this.data.length) {
      localStorage.clear();
    }
  }

  isOpened(day: number): boolean {
    return this.openedDays.includes(day);
  }
}
