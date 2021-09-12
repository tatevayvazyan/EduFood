import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpMethodsService } from 'src/app/services/http-methods.service';
import { Role } from '../../models/menu-item';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  userForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private httpMethodsService: HttpMethodsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      classNumber: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@mskh.am")]],
      phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
      role: [Role.customer],
    })
  }

  onSubmit(): void {
    this.httpMethodsService.addItem('user/create', this.userForm.value)
      .subscribe(data => {
        this.router.navigateByUrl('signIn')
      });
  }
}
