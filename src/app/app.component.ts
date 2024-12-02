import { Component } from '@angular/core';
import { MyNewComponentComponent } from "./my-new-component/my-new-component.component";

@Component({
  selector: 'app-root',
  imports: [MyNewComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-angular-app';
  message = 'Hello from Angular!';

  changeMessage() {
    this.message = 'You have clicked the button!';
  }
}
