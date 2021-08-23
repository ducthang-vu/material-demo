import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogsExampleComponent } from '../dialogs-example/dialogs-example.component';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const ref = this.matDialog.open(DialogsExampleComponent, {
      data: {
        name: 'user1'
      }
    });
    ref.afterClosed().subscribe(console.log)
  }
}
