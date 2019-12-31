import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    h1 {
      font-family: "Times New Roman", Times, serif;
    }
  `]
})
export class AppComponent {
  name = 'my-first-app';
}
