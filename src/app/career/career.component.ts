import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent {}
