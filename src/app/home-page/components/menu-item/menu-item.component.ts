import { Component, Input, OnInit, HostListener } from '@angular/core';
import { OrderDataService } from '../../../services/order-data.service';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() item: any;
  @Input() index: number = 1;

  isHovered: boolean = false;
  quantity: number = 0;

  @HostListener('mouseenter')
  show(): void {
    this.isHovered = true;
  }

  @HostListener('mouseleave')
  hide(): void {
    this.isHovered = false;
  }

  constructor(private orderDataService: OrderDataService) { }

  ngOnInit(): void {
  }

  onDecrement(): void {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  onIncrement(): void {
    this.quantity++;
  }

  addToBasket(): void {
    if (this.quantity > 0) {
      const { id, title, description, image, price } = this.item;
      this.orderDataService.setItem({
        id,
        title,
        description,
        image,
        price,
        uri: this.item.assets[0].uri,
        quantity: this.quantity,
      });
      this.quantity = 0;
    }
  }
}
