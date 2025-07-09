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

    if (this.clickCount === 1) {
      this.clickCount = 0;

      const mapsUrl =
        'https://www.google.com/maps/place/Tulsi+Pratham+Society+Sector+06/@18.6499894,73.8425948,124m/data=!3m1!1e3!4m6!3m5!1s0x3bc2b80a1ef1cf27:0x5a375eb6fa789d4!8m2!3d18.6499982!4d73.8425262!16s%2Fg%2F11b75m4pvr?entry=ttu&g_ep=EgoyMDI1MDcwNi4wIKXMDSoASAFQAw%3D%3D';
      window.open(mapsUrl, '_blank');
    } else {
      this.clickTimer = setTimeout(() => {
        this.clickCount = 0;
      }, 400);
    }
  }
}
