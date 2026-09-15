import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-day01-counter-app',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './day01-counter-app.component.html',
  styleUrl: './day01-counter-app.component.scss'
})
export class Day01CounterAppComponent {
  count: number = 0;

  public incrementCount(): void {
    this.count++;
  }

  public decrementCount(): void {
    this.count > 0 ? this.count-- : this.count = 0;  
  }

  public resetCount(): void {
    this.count = 0;
  }
}
