import {
  ChangeDetectionStrategy,
  Component,Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  @Input() isPopupVisible = false;
  @Input() hideHeader = false;
  
  name = ' smarttechengineering.ofc@gmail.com';
  phone = '+91 9552530532';
}
