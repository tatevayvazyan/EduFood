import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpMethodsService } from 'src/app/services/http-methods.service';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  userForm: any;
  isNotValid: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private httpMethodsService: HttpMethodsService,
    private router: Router,
    private navigationService: NavigationService,
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    })
  }

  onSubmit(): void {
    this.httpMethodsService.addItem('authenticate', this.userForm.value)
      .subscribe((data => {
        this.isNotValid = false;
        window.localStorage.setItem('token', data.token);
        window.localStorage.setItem('role', data.role);
        window.localStorage.setItem('userId', data.id);
        window.localStorage.setItem('isValid', data.valid);
        this.navigationService.setItem();
        this.router.navigateByUrl('');
      }), 
      (err => {
        this.isNotValid = true;
        this.userForm.reset();
      }));
  }
}
