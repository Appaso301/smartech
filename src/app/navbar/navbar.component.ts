import {
  Component,
  AfterViewInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,Input,
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
    @Input() isPopupVisible = false;
    @Input() moveUp = false;
    

  menuOpen = false;
  activeSection = '';
  private observer: IntersectionObserver | null = null;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    const sections = document.querySelectorAll('section[id]');
    console.log('Sections found:', sections);

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Visible section:', entry.target.id);
            this.activeSection = entry.target.id;
          }
        });
      },
      { threshold: 0.1 } // More sensitive
    );

    sections.forEach((section) => this.observer?.observe(section));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
