import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  @Output() popupStateChange = new EventEmitter<boolean>();

  selectedFilter = 'All';

  portfolioItems = [
    { id: 1, src: 'Geo welding Fixture.1.png', alt: 'Geo welding Fixture 1', category: 'Geo welding Fixture', title: 'Geo welding Fixture' },
    { id: 2, src: 'Geo welding Fixture.2.png', alt: 'Geo welding Fixture 2', category: 'Geo welding Fixture', title: 'Geo welding Fixture' },
    { id: 3, src: 'Geo welding Fixture.3.png', alt: 'Geo welding Fixture 3', category: 'Geo welding Fixture', title: 'Geo welding Fixture' },
    { id: 4, src: 'Geo welding Fixture.4.png', alt: 'Geo welding Fixture 4', category: 'Geo welding Fixture', title: 'Geo welding Fixture' },
    { id: 5, src: 'image.png', alt: 'Geo welding Fixture 5', category: 'Geo welding Fixture', title: 'Geo welding Fixture' },
    { id: 6, src: 'Geo welding Fixture.6.png', alt: 'Geo welding Fixture 6', category: 'Geo welding Fixture', title: 'Geo welding Fixture' },
    { id: 7, src: 'Geo welding Fixture.7.png', alt: 'Geo welding Fixture 7', category: 'Geo welding Fixture', title: 'Geo welding Fixture' },
    { id: 8, src: 'Gripper.png', alt: 'Gripper 1', category: 'Gripper', title: 'Gripper' },
    { id: 9, src: 'Gripper.jpg', alt: 'Gripper 2', category: 'Gripper', title: 'Gripper' },
    { id: 10, src: 'geo-welding-handjig-1.png', alt: 'Geo welding Fixture & Hand Jig 1', category: 'Geo welding Fixture & Hand Jig', title: 'Geo welding Fixture & Hand Jig' },
    { id: 11, src: 'geo-welding-handjig-2.png', alt: 'Geo welding Fixture & Hand Jig 2', category: 'Geo welding Fixture & Hand Jig', title: 'Geo welding Fixture & Hand Jig' },
    { id: 12, src: 'geo-welding-handjig-3.png', alt: 'Geo welding Fixture & Hand Jig 3', category: 'Geo welding Fixture & Hand Jig', title: 'Geo welding Fixture & Hand Jig' },
    { id: 13, src: 'Respot welding Fixture.1.png', alt: 'Respot welding Fixture 1', category: 'Respot welding Fixture', title: 'Respot welding Fixture' },
    { id: 14, src: 'Respot welding Fixture.2.png', alt: 'Respot welding Fixture 2', category: 'Respot welding Fixture', title: 'Respot welding Fixture' },
    { id: 15, src: 'Respot welding Fixture.3.png', alt: 'Respot welding Fixture 3', category: 'Respot welding Fixture', title: 'Respot welding Fixture' },
    { id: 16, src: 'Radiator Assembly Line.2.png', alt: 'Radiator Assembly Line 1', category: 'Radiator Assembly Line', title: 'Radiator Assembly Line' },
    { id: 17, src: 'Radiator Assembly Line.1.png', alt: 'Radiator Assembly Line 2', category: 'Radiator Assembly Line', title: 'Radiator Assembly Line' },
    { id: 18, src: 'panel-checker-gauges-1.jpg', alt: 'Panel checker & Gauges 1', category: 'Panel checker & Gauges', title: 'Panel checker & Gauges' },
    { id: 19, src: 'panel-checker-gauges-2.jpg', alt: 'Panel checker & Gauges 2', category: 'Panel checker & Gauges', title: 'Panel checker & Gauges' },
    { id: 20, src: 'panel-checker-gauges-3.jpg', alt: 'Panel checker & Gauges 3', category: 'Panel checker & Gauges', title: 'Panel checker & Gauges' },
    { id: 21, src: 'panel-checker-gauges-4.jpg', alt: 'Panel checker & Gauges 4', category: 'Panel checker & Gauges', title: 'Panel checker & Gauges' },
    { id: 22, src: 'panel-checker-gauges-5.jpg', alt: 'Panel checker & Gauges 5', category: 'Panel checker & Gauges', title: 'Panel checker & Gauges' },
    { id: 23, src: 'panel-checker-gauges-6.jpg', alt: 'Panel checker & Gauges 6', category: 'Panel checker & Gauges', title: 'Panel checker & Gauges' },
    { id: 24, src: 'panel-checker-gauges-7.jpg', alt: 'Panel checker & Gauges 7', category: 'Panel checker & Gauges', title: 'Panel checker & Gauges' },
    { id: 25, src: 'panel-checker-gauges-8.jpg', alt: 'Panel checker & Gauges 8', category: 'Panel checker & Gauges', title: 'Panel checker & Gauges' },
  ];

  filters = ['All', 'Geo welding Fixture', 'Gripper', 'Geo welding Fixture & Hand Jig', 'Respot welding Fixture', 'Radiator Assembly Line', 'Panel checker & Gauges'];

  currentPopupId: number | null = null;

  get currentItem() {
    return this.portfolioItems.find(item => item.id === this.currentPopupId);
  }

  filterItems() {
    return this.selectedFilter === 'All'
      ? this.portfolioItems
      : this.portfolioItems.filter(item => item.category === this.selectedFilter);
  }

    openPopup(id: number) {
    this.currentPopupId = id;
    this.popupStateChange.emit(true);
  }

  closePopup() {
    this.currentPopupId = null;
    this.popupStateChange.emit(false);
  }
}