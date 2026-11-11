import { Component, effect, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddCategoryRequest } from '../models/category.model';
import { CategoryService } from '../category-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-category.html',
  styleUrl: './add-category.css',
})
export class AddCategory {
  private _categoryService = inject(CategoryService);
  private _router = inject(Router);

  addCategoryFromGroup = new FormGroup({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(100)]
    }),
    urlHandler: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(100)]
    })
  })

  get nameFormControl() {
    return this.addCategoryFromGroup.controls.name
  }
  get urlHandlerFormControl() {
    return this.addCategoryFromGroup.controls.urlHandler
  }
  onsubmit() {
    const addCategoryFormValues = this.addCategoryFromGroup.getRawValue();

    const addCategoryRequest: AddCategoryRequest = {
      name: addCategoryFormValues.name,
      url: addCategoryFormValues.urlHandler
    }
    //this._categoryService.addCategory(addCategoryRequest);
    //console.log(this._categoryService.addCategoryStatus);
    //this._router.navigate(['/admin/categories']);

    this._categoryService.addCategory(addCategoryRequest).subscribe({
      next: (response) => {
        console.log('category added successfully', response);
        // Navigate ONLY after the post request has fully succeeded
        this._router.navigate(['/admin/categories']);
      },
      error: (err) => {
        console.log('Error occured', err);
      }
    });
  }
}

