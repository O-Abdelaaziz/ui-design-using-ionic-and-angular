import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {
  IonAvatar, IonBadge,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonIcon, IonImg,
  IonItem,
  IonLabel,
  IonRow,
  IonSearchbar
} from '@ionic/angular/standalone';
import {register} from "swiper/element/bundle";
import {CardComponent} from "../components/card/card.component";
import {FoodItem, FoodItems, RecommendedDrinks} from "../models/food-item.model";
import {HeadingComponent} from "../components/heading/heading.component";
import {categories, Category} from "../models/category.model";
import {CategoryComponent} from "../components/category/category.component";
import {RouterModule} from "@angular/router";

register();

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [RouterModule, IonHeader, IonContent, IonItem, IonLabel, IonAvatar, IonSearchbar, IonGrid, IonRow, IonCol, CardComponent, HeadingComponent, CategoryComponent, IonBadge],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  public popularDishes: FoodItem[] = FoodItems;
  public recommendedDrinks: FoodItem[] = RecommendedDrinks;
  public categories: Category[] = categories;

  constructor() {
  }
}
