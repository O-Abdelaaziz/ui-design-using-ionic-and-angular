import {Component, input, OnInit} from '@angular/core';
import {Category} from "../../models/category.model";
import {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  public category = input<Category | undefined>();

  constructor() {
    addIcons({
      'food': './assets/icon/food.svg'
    })
  }

  ngOnInit() {
  }

}
