import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true,
})
export class ScrollAnimationDirective implements OnInit {
  @Input() animationDelay: string = '0s'; // 👈 default delay

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      // Set the animation delay as an inline style
      this.renderer.setStyle(
        this.el.nativeElement,
        'animation-delay',
        this.animationDelay
      );

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.renderer.addClass(this.el.nativeElement, 'visible');
              observer.unobserve(this.el.nativeElement);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(this.el.nativeElement);
    } else {
      this.renderer.setStyle(
        this.el.nativeElement,
        'animation-delay',
        this.animationDelay
      );
      this.renderer.addClass(this.el.nativeElement, 'visible');
    }
  }
}
