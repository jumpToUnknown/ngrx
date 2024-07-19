import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    DatePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  counter = 0;
  updatedAt?: number;

  get cannotDecrease(): boolean {
    return this.counter <= 0;
  }

  increase(): void {
    this.counter++;
    this.updatedAt = Date.now();
  }

  decrease(): void {
    this.counter--;
    this.updatedAt = Date.now();
  }

  clear(): void {
    this.counter = 0;
    this.updatedAt = Date.now();
  }
}
