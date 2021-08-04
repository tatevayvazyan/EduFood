import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly navigation = [{
    name: 'All', 
    path: '',
  }, {
    name: 'Lunches', 
    path: 'lunches'
  }];

  constructor(private routerModule: Router) {
  }

  navigate(menuItem: any) {
    this.routerModule.navigate([menuItem.path]);
  }
}
