import {Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonContent, IonHeader, IonIcon, IonImg, IonSearchbar, IonTitle, IonToolbar} from '@ionic/angular/standalone';

import {register} from 'swiper/element/bundle';
import {Category} from "../../shared/models/category.model";
import {CategoryService} from "../../services/category.service";
import {CategoryItemComponent} from "../../shared/components/category-item/category-item.component";
import {Product} from "../../shared/models/product.model";
import {ProductService} from "../../services/product.service";
import {ProductCardComponent} from "../../shared/components/product-card/product-card.component";
import {addIcons} from "ionicons";
import {gridOutline, locationOutline} from "ionicons/icons";

register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonIcon, IonImg, IonSearchbar, CategoryItemComponent, ProductCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {
  private _categoryService = inject(CategoryService);
  private _productService = inject(ProductService);

  public categories: Category[] = [];
  public products: Product[] = [];

  constructor() {
    addIcons({
      'grid-outline': gridOutline,
      'location-outline': locationOutline,
    })
  }

  ngOnInit() {
    this.categories = this._categoryService.getAllCategories();
    this.products = this._productService.getAllProducts();
  }

}
