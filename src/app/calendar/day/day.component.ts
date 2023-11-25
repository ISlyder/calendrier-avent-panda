import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Calendar} from "../calendar-data";

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {
  @Input() data!: Calendar;
  @Input() isOpened = false

  @Output() openDay = new EventEmitter<Calendar>();

  constructor() {
  }
}
