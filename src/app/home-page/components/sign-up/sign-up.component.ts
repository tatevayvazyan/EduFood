import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpMethodsService } from 'src/app/services/http-methods.service';

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
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      role: ['CUSTOMER'],
    })
  }

  onSubmit(): void {
    this.httpMethodsService.addItem('user/create', this.userForm.value)
      .subscribe(data => {
        this.router.navigateByUrl('signIn')
      });
  }
}
