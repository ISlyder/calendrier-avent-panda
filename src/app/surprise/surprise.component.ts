import {Component, Input, OnInit} from '@angular/core';
import {Calendar, DATA} from "../calendar/calendar-data";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-surprise',
  templateUrl: './surprise.component.html',
  styleUrls: ['./surprise.component.css']
})
export class SurpriseComponent implements OnInit {
  day!: Calendar;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    const currentDay = this.route.snapshot.paramMap.get('day');
    this.day = DATA.find(value => value.day.toString() === currentDay) as Calendar;
  }

}
