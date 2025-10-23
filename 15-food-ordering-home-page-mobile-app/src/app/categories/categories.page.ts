import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButtons, IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {categories, Category} from "../models/category.model";
import {CategoryComponent} from "../components/category/category.component";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, CategoryComponent]
})
export class CategoriesPage implements OnInit {
  public categories: Category[] = categories;
  constructor() { }

  ngOnInit() {
  }

}
