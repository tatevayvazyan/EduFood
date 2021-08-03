import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-lunches',
  templateUrl: './lunches.component.html',
  styleUrls: ['./lunches.component.css']
})
export class LunchesComponent implements OnInit {
  lunchBoxes: LunchBox[] = [
    {name: "Cucumber salad", price: 500},
    {name: "French fries", price: 550},
    {name: "Chicken nugets", price: 700}
  ];
  orders: LunchBox[] = [];
  totalPrice: number = 0;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  onOrder() {
    this.httpClient.post('https://myendpoint.free.beeceptor.com', this.orders);
    console.log("Order sent")
  }

  onChecked(lunchBox: LunchBox) {
    this.orders.push(lunchBox);
    this.totalPrice += lunchBox.price;
    console.log(this.orders);
  }
}

interface LunchBox {
  name: string,
  price: number
}
