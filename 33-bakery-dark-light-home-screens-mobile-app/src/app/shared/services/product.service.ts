import {Injectable} from '@angular/core';
import {Category} from "../models/category.model";
import {Product} from "../models/product.model";
import {Seller} from "../models/seller.model";
import {categories} from "../../seed/categories.seed";
import {products} from "../../seed/products.seed";
import {sellers} from "../../seed/sellers.seed";

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  getProducts(): Product[] {
    return products;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return products.filter((product) => product.category_id === categoryId);
  }

  getProductById(
    id: number
  ): (Product & { seller?: Seller; category?: Category }) | null {
    const product = products.find((product) => product.id === id);

    if (product) {
      const seller = sellers.find((seller) => seller.id === product.seller_id);
      const category = categories.find(
        (category) => category.id === product.category_id
      );

      return {...product, seller, category};
    }

    return null;
  }
}
