import { Component, OnInit } from '@angular/core';
import { HttpMethodsService } from 'src/app/services/http-methods.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: any;

  constructor(private httpMethodsService: HttpMethodsService) { }

  ngOnInit(): void {
    this.httpMethodsService.getItems('order/daily')
      .subscribe(data => {
        this.orders = data;
      });
  }
}
