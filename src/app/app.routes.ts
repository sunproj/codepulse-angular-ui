import { Routes } from '@angular/router';
import { Listcategory } from './features/categories/listcategory/listcategory';
import { AddCategory } from './features/categories/add-category/add-category';

export const routes: Routes = [
    {
        path: 'admin/categories',
        component: Listcategory
    },
    {
        path: 'admin/category/add',
        component: AddCategory
    }
];
