import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-square-boxes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './square-boxes.component.html',
  styleUrl: './square-boxes.component.scss',
  animations: [
    trigger('boxAnimation', [
      state('void', style({ transform: 'scale(0)' })),
      transition(':enter, :leave', [
        animate('0.5s', style({ transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class SquareBoxesComponent {
  currentTheme = 'light-theme';
  animationState = 'void';
  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.animationState = this.animationState === 'void' ? 'active' : 'void';
  }
}
