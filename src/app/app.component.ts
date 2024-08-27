import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SquareBoxesComponent } from './square-boxes/square-boxes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SquareBoxesComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'theme-switcher-app';
}
