import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
    readonly navigationCustomer = [{
        name: 'Sign In', 
        path: 'signIn'
        }, {
            name: 'Sign Up', 
            path: 'signUp'
        }
    ];

    readonly navigationAdmin = [{
        name: 'Sign In', 
        path: 'signIn'
        }, {
        name: 'Sign Up', 
        path: 'signUp'
        }, {
        name: 'Orders', 
        path: 'orders'
        }, {
        name: 'Add food', 
        path: 'orders/add'
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
        if (role === 'ADMIN') {
            this.navigation.next(this.navigationAdmin);
        } else {
            this.navigation.next(this.navigationCustomer);
        }
    }
}
