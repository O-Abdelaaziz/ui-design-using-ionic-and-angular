import {Injectable} from '@angular/core';
import {ICategory} from "../models/icategory.model";
import {IProduct} from "../models/iproduct.model";

@Injectable({
  providedIn: 'root',
})
export class DataService {

  getCategories() {
    let categories = [];

    let cat1: ICategory = {
      id: 1,
      name: 'Womens',
      image: './assets/categories/category-1.png'
    }
    let cat2: ICategory = {
      id: 2,
      name: 'Mens',
      image: './assets/categories/category-2.png'
    }
    let cat3: ICategory = {
      id: 3,
      name: 'Kids',
      image: './assets/categories/category-3.png'
    }

    categories.push(cat1, cat2, cat3);

    return categories;
  }

  getFeaturedProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 55,
      image: './assets/products/prod-1.png',
      isHot:true,
      isOnSale:false,
      isNew:false
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Mens T-Shirt',
      price: 34,
      image: './assets/products/prod-2.png',
      isHot:false,
      isOnSale:true,
      isNew:false
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 40,
      image: './assets/products/prod-3.png',
      isHot:false,
      isOnSale:false,
      isNew:true
    }

    products.push(prod1, prod2, prod3);

    return products;
  }

  getBestSellProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 55,
      image: './assets/products/prod-4.png',
      isHot:false,
      isOnSale:true,
      isNew:false
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Mens T-Shirt',
      price: 34,
      image: './assets/products/prod-5.png',
      isHot:true,
      isOnSale:false,
      isNew:false
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 40,
      image: './assets/products/prod-6.png',
      isHot:false,
      isOnSale:false,
      isNew:true
    }

    products.push(prod1, prod2, prod3);

    return products;
  }
}
