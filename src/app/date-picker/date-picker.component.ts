import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  minDate = new Date(2021, 0, 5);
  maxDate = new Date(2021, 3, 10);

  dateFilter = (date: Date | null): boolean => {
    if (date === null) return false
    const day = date.getDay();
    return day !== 0 && day !== 6
}

  constructor() { }

  ngOnInit(): void {
  }

}
