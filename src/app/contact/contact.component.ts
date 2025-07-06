import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';

@Component({
  selector: 'app-contact',
  imports: [ScrollAnimationDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  clickCount = 0;
  clickTimer: any;

  onAddressClick() {
    this.clickCount++;

    if (this.clickCount === 2) {
      this.clickCount = 0;

      const mapsUrl =
        'https://www.google.com/maps/search/?api=1&query=Flat+No+C2+47,+Kendriya+Vihar,+Moshi+Pradhikaran,+Sector+No+4,+Pune,+Maharashtra+412105,+India';
      window.open(mapsUrl, '_blank');
    } else {
      this.clickTimer = setTimeout(() => {
        this.clickCount = 0;
      }, 400);
    }
  }
}
