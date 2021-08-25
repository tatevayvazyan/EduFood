import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpMethodsService } from 'src/app/services/http-methods.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent implements OnInit {
  @ViewChild('file') file: any;
  foodForm: any;
  image: any;
  isFoodAdded: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private httpMethodsService: HttpMethodsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.foodForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      category: ['main'],
      price: ['', [Validators.required]],
    });
  }

  onChange(): void {
    this.image = this.file.nativeElement.files[0];
  }

  onSubmit(): void {
    this.httpMethodsService.addItem('food/create', this.foodForm.value)
      .subscribe(data => {
        this.httpMethodsService.upload(`food/asset/${data.id}/image-${data.id}`, this.image)
          .subscribe(data => {
            this.isFoodAdded = true;
          });
          this.foodForm.reset();
      });
  }
}
