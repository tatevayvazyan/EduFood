import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  userForm: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: [null, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')],
      address: this.formBuilder.group({
        country: [],
        city: [],
      }),
      age: [],
    })
  }

  onSubmit(): void {
    console.log(this.userForm.value)
  }
}
