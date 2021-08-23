import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  openSnackbar(message: string) {
    let ref = this.snackbar.open(message, 'dismiss', { duration: 2500 });
    ref.onAction().subscribe(() => console.log('action'));
    ref.afterDismissed().subscribe(() => console.log('was dismissed'));
  }
}
