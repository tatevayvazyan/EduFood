import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Role } from '../home-page/models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
    readonly navigationCustomer = [{
        name: 'Մուտք գործել', 
        path: 'signIn'
        }, {
            name: 'Գրանցվել', 
            path: 'signUp'
        }
    ];

    readonly navigationAdmin = [{
            name: 'Մուտք գործել', 
            path: 'signIn'
        }, {
            name: 'Գրանցվել', 
            path: 'signUp'
        }, {
            name: 'Պատվերներ', 
            path: 'orders'
        }, {
            name: 'Ավելացնել սնունդ', 
            path: 'orders/add'
        }, {
            name: 'Օգտագործողներ', 
            path: 'users'
        }
    ];

    navigation = new BehaviorSubject(this.navigationCustomer);

    constructor() { 
    }

    getItems(): any {
        return this.navigation;
    }

    setItem(): void {
        const role = window.localStorage.getItem('role');
        if (role === Role.admin) {
            this.navigation.next(this.navigationAdmin);
        } else {
            this.navigation.next(this.navigationCustomer);
        }
    }
}
