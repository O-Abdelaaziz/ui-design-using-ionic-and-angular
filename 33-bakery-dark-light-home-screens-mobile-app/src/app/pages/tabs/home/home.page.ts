import {Component, computed, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonRow,
  IonSearchbar,
  IonText,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {cart, chevronDown, heart, location, notifications, options} from "ionicons/icons";
import {ListHeadingComponent} from "../../../shared/components/list-heading/list-heading.component";
import {BannerComponent} from "../../../shared/components/banner/banner.component";
import {ProductService} from "../../../shared/services/product.service";
import {CategoryService} from "../../../shared/services/category.service";
import {BannerService} from "../../../shared/services/banner.service";
import {Product} from "../../../shared/models/product.model";
import {Category} from "../../../shared/models/category.model";
import {Banner} from "../../../shared/models/banner.interface";
import {CategoriesComponent} from "../../../shared/components/categories/categories.component";
import {
  ProductListHorizontalComponent
} from "../../../shared/components/product-list-horizontal/product-list-horizontal.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonIcon, IonText, IonButton, IonRow, IonCol, IonSearchbar, ListHeadingComponent, BannerComponent, CategoriesComponent, ProductListHorizontalComponent]
})
export class HomePage implements OnInit {
  private bannerService = inject(BannerService);
  private categoryService = inject(CategoryService);
  private productService = inject(ProductService);

  banners = computed<Banner[]>(() => this.bannerService.getBanners());
  categories = computed<Category[]>(() => this.categoryService.getCategories());
  products = computed<Product[]>(() => this.productService.getProducts());

  constructor() {
    addIcons({
      location,
      chevronDown,
      cart,
      notifications,
      heart,
      options
    })
  }

  ngOnInit() {
  }

}
