import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { HttpMethodsService } from '../../services/http-methods.service';

@Injectable({
  providedIn: 'root'
})
export class HomePageResolver implements Resolve<Observable<any>> {

    constructor(private httpMethodsService: HttpMethodsService) {}

  resolve(): Observable<any> {
    return this.httpMethodsService.getItems('food/all');
  }
}