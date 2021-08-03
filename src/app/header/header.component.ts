import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectedLanguage: string = 'Arm';
  // readonly menu = ['All', 'Articles', 'Bakery', 'Dishes', 'Diet', 'Dessert'];
  readonly navigation = ['All', 'Lunches'];

  constructor(private routerModule: Router) {
  }

  onLanguageSelect($event: MouseEvent) {
    $event.preventDefault();
    this.selectedLanguage = ($event.target! as HTMLSpanElement).innerText;
  }

  navigate(menuItem: String) {
    this.routerModule.navigate([menuItem.toLowerCase()])
  }
}
