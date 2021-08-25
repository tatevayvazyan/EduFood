import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  menu: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.menu = this.route.snapshot.data.homePageResolver;
  }
}
