import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../category-service';
import { Category } from '../models/category.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listcategory',
  imports: [CommonModule, RouterLink],
  templateUrl: './listcategory.html',
  styleUrl: './listcategory.css',
})
export class Listcategory {

  private _mCategoryService = inject(CategoryService);
  category = signal<Category[]>([]);
  isLoading = signal(false);

  ngOnInit(): void {
    this.isLoading.set(true);
    this._mCategoryService.getAllCategory().subscribe({
      next: (response) => {

        console.log('API response length:', response.length);

        this.category.set(response);
        this.isLoading.set(false);
        console.log('Category length after assignment:', this.category().length);

        setTimeout(() => {
          console.log('Category length after timeout:', this.category().length);
        });
      },
      error: (err) => {
        console.error('API error:', err);
      }
    });
  }
}