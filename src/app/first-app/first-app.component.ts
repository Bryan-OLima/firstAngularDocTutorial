import { Component } from '@angular/core';

@Component({
  selector: 'app-first-app',
  styleUrls: ['./first-app.component.scss'],
  template: `
    <p>
      <button (click)="counting()"> Add One </button> <input class="counter" [value]="count" readonly><br/>
      <button (click)=" count = 0"> Reset </button> 
    </p>

    <p>
      <span>
       <a href="">Back</a>
      </span>
    </p>
 `,
})
export class FirstAppComponent {

  count: number = 0;

  counting(){
    this.count ++
  }
}
