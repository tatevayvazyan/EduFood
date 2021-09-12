import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { OrderDataService } from '../../../services/order-data.service';
import { HttpMethodsService } from 'src/app/services/http-methods.service';
import { identifierModuleUrl } from '@angular/compiler';
import { NavigationService } from '../../../services/navigation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isBasketOpen: boolean = false;
  isOrdered: boolean = false;
  order: any;
  navigation: any;
  subscription: any;
  userId: any;
  isValid: string | null= 'false';
  
  get sum(): number {
    return this.order.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);
  }

  constructor(
    private routerModule: Router, 
    private orderDataService: OrderDataService,
    private httpMethodsService: HttpMethodsService,
    private navigationService: NavigationService,
  ) {
    this.subscription = this.navigationService.getItems()
      .subscribe((data: any) => this.navigation = data);
  }

  ngOnInit() {
    this.userId = window.localStorage.getItem('userId');
    this.isValid = window.localStorage.getItem('isValid');
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  navigate(menuItem: any) {
    this.routerModule.navigate([menuItem.path]);
  }

  openBasket(): void {
    this.order = this.orderDataService.getItems();
    this.isBasketOpen = true;
    this.isOrdered = false;
    this.userId = window.localStorage.getItem('userId');
    this.isValid = window.localStorage.getItem('isValid');
  }

  onDelete(id: number): void {
    this.order = this.orderDataService.deleteItem(id);
  }

  isDisable(): boolean {
    const date = (new Date).getHours();
    if ((date <= 18 && date >= 10) || !this.isValid || this.isValid === 'false') {
      return true;
    }
    return false;
  }

  orderFood(): void {
    const userId = window.localStorage.getItem('userId');
    const order = this.order.map((item: any) => {
      const { id, quantity } = item;
      return { item: id, quantity };
    });
    this.httpMethodsService.addItem(`order/create/${userId}`, { items: order })
      .subscribe((data => {
        this.order = [];
        this.isOrdered = true;
      }));
  }
}
