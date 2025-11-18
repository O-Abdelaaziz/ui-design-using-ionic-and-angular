import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getAllProducts() {
    return [
      {
        id: 1,
        name: 'Organic Bananas',
        price: 1.99,
        image: './assets/items/banana.jpg'
      },
      {
        id: 2,
        name: 'Fresh Oranges',
        price: 4.99,
        image: './assets/items/oranges.jpg'
      },
      {
        id: 3,
        name: 'Chicken eggs',
        price: 6.99,
        image: './assets/items/eggs.jpg'
      },
      {
        id: 4,
        name: 'Vegetables',
        price: 3.99,
        image: './assets/items/vegetables.jpg'
      },
      {
        id: 5,
        name: 'Bread',
        price: 4.99,
        image: './assets/items/bread.jpg'
      },
      {
        id: 6,
        name: 'Lemon',
        price: 6.99,
        image: './assets/items/lemon.jpg'
      },
      {
        id: 7,
        name: 'Meat',
        price: 3.99,
        image: './assets/items/meat.jpg'
      },
      {
        id: 8,
        name: 'Tomato',
        price: 3.99,
        image: './assets/items/tomato.jpg'
      },
      {
        id: 9,
        name: 'Mix',
        price: 3.99,
        image: './assets/items/mix.jpg'
      },
      {
        id: 10,
        name: 'Juice',
        price: 3.99,
        image: './assets/items/juice.jpg'
      },

    ]
  }

  getById(id: number) {
    return this.getAllProducts().find(product => product.id === id);
  }
}
