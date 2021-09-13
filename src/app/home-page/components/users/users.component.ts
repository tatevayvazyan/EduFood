import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpMethodsService } from 'src/app/services/http-methods.service';
import { Router } from '@angular/router';
import { Role } from '../../models/menu-item';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;

    constructor(
        private route: ActivatedRoute,
        private httpMethodsService: HttpMethodsService,
        private router: Router,
        private cd: ChangeDetectorRef,
    ) { }

  ngOnInit(): void {
    const allUsers = this.route.snapshot.data.usersResolver;
    this.users = allUsers.filter((user: any) => user.role === Role.customer);
  }

  deleteUser(userId: number): void {
    this.httpMethodsService.deleteItem(`user/${userId}`)
    .subscribe(data => {
      this.users = this.users.filter((user: any) => user.id !== userId);
      this.cd.detectChanges();
    });
  }

  confirmUser(userId: number): void {
    this.httpMethodsService.updateItem(`user/validate/${userId}`)
    .subscribe(data => {
        this.users = this.users.map((user: any) => {
            if (user.id === userId) {
                return {
                    ...user,
                    valid: true,
                }
            } else {
                return user;  
            }
        });
        this.cd.detectChanges();
    });
  }
}
