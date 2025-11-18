import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  getAllCategories() {
    return [
      {
        id: 1,
        name: 'Vegetables',
        image: './assets/categories/1.jpg'
      },
      {
        id: 2,
        name: 'Bakery',
        image: './assets/categories/2.jpg'
      },
      {
        id: 3,
        name: 'Others',
        image: './assets/categories/4.jpg'
      },
      {
        id: 4,
        name: 'Meat & Eggs',
        image: './assets/categories/3.jpg'
      },
      {
        id: 5,
        name: 'Fruits',
        image: './assets/categories/5.jpg'
      },
      {
        id: 6,
        name: 'Drinks',
        image: './assets/categories/6.jpg'
      },
    ]
  }
}
