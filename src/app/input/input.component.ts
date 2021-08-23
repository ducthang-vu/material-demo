import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  selectedValue: string | null = null;
  options = ['Angular', 'React', 'Vue'];

  myControl = new FormControl()
  filteredOptions: Observable<string[]> | undefined;

  constructor() {
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLocaleLowerCase();
    return this.options.filter(option => option.toLocaleLowerCase().includes(filterValue))
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }

}
