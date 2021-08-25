import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {
  order: Array<any> = [];

  constructor() { }

  getItems(): any {
    return this.order;
  }

  setItem(item: any): void {
    this.order.push(item);
  }

  deleteItem(id: number): any {
    this.order = this.order.filter(item => item.id !== id);
    return this.order;
  }
}
