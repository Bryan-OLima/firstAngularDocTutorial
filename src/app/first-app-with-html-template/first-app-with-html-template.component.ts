import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackBarConfirmationComponent } from '../shared/snack-bar-confirmation/snack-bar-confirmation.component';

@Component({
  selector: 'app-first-app-with-html-template',
  templateUrl: './first-app-with-html-template.component.html',
  styleUrls: ['./first-app-with-html-template.component.scss'],
})
export class FirstAppWithHtmlTemplateComponent {

  count: number = 0;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  alert: string = 'The counter has been reseted';
  action: string = 'Done';
  durationTime: number = 2;

  constructor(private _snackBar: MatSnackBar) {}

  counter(): void{
    this.count ++
    this._snackBar.dismiss();
  }

  resetAlert() {
    this._snackBar
      .openFromComponent(SnackBarConfirmationComponent, {
        duration: this.durationTime * 1000
      });
  }
}
