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
        'https://www.google.com/maps/place/C+2+kendriya+vihar/@18.649465,73.8475504,206m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3bc2c70d31f8880b:0xe682fdb9e362f03d!2sC+2+kendriya+vihar!8m2!3d18.6494848!4d73.8481303!16s%2Fg%2F11t2t_rr9m!3m5!1s0x3bc2c70d31f8880b:0xe682fdb9e362f03d!8m2!3d18.6494848!4d73.8481303!16s%2Fg%2F11t2t_rr9m?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D';
      window.open(mapsUrl, '_blank');
    } else {
      this.clickTimer = setTimeout(() => {
        this.clickCount = 0;
      }, 400);
    }
  }
}
