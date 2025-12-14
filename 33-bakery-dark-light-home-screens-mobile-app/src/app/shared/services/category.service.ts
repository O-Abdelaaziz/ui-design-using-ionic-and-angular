import {Injectable} from '@angular/core';
import {categories} from "../../seed/categories.seed";
import {Category} from "../models/category.model";

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  getCategories(): Category[] {
    return categories;
  }
}
