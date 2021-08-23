import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, scan } from 'rxjs/operators';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {

  showSpinner$: Observable<number> = interval(100).pipe(
    scan((a) => ++a, 0),
    map(a => a % 100)
  );

  constructor() { }

  ngOnInit(): void {
  }


}
