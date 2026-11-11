import { AddCategory } from './add-category/add-category';
import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AddCategoryRequest, Category } from './models/category.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);

  addCategoryStatus: 'idle' | 'loading' | 'error' | 'success' = 'idle';

  //private url = 'http://localhost:5050/api/Categories';
  private apiBaseUrl = environment.apiBaseUrl;
  /*Add Category Method*/
  addCategory(data: AddCategoryRequest) {
    return this.http.post(`${this.apiBaseUrl}/api/Categories`, data);
  }
  /* 
  addCategory(data: AddCategoryRequest) {
    this.http.post(this.url, data).subscribe({
      next: (response) => {
        this.addCategoryStatus = 'success';
        console.log('category added successfully', response);

      },
      error: (err) => {
        console.log('Error occured', err);
        this.addCategoryStatus = 'error';
      }
    })
  }
*/
  /** Get All Category Method */

  /*getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiBaseUrl}/api/Categories`);
  }*/

  getAllCategory() {
    return httpResource<Category[]>(() => `${this.apiBaseUrl}/api/Categories`);
  }
}
