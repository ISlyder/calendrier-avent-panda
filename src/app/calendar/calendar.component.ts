import {Component} from '@angular/core';
import {Calendar, DATA} from "./calendar-data";

export const OPENED_DAYS_KEY = 'openedDays';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  data: Calendar[] = DATA;

  openedDays: number[] = [];

  constructor() {
    this.openedDays = JSON.parse(localStorage.getItem(OPENED_DAYS_KEY) || '[]');
  }

  open(data: Calendar): void {
    const currentDayOfMonth = new Date().getDate();
    if (data.day > currentDayOfMonth) {
      console.log('Cannot open');
      return;
    }
    if (data.action) data.action();
    if (!this.isOpened(data.day)) {
      this.openedDays.push(data.day);
    }
    localStorage.setItem(OPENED_DAYS_KEY, JSON.stringify(this.openedDays));
    /* TODO: clear localStorage at last day */
  }

  isOpened(day: number): boolean {
    return this.openedDays.includes(day);
  }
}
