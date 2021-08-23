import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogs-example',
  templateUrl: './dialogs-example.component.html',
  styleUrls: ['./dialogs-example.component.scss']
})
export class DialogsExampleComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string}) { }

  ngOnInit(): void {
  }

}
