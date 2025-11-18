import {Component, input, OnInit} from '@angular/core';
import {Category} from "../../models/category.model";
import {IonCard, IonCardHeader, IonCardTitle, IonImg} from "@ionic/angular/standalone";

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [IonCard, IonImg, IonCardHeader, IonCardTitle],
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent implements OnInit {

  public category = input<Category>();

  constructor() {
  }

  ngOnInit() {
  }

}
