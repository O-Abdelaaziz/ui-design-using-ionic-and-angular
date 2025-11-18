import {Component, input, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonIcon,
  IonImg
} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {addOutline, heart, heartOutline} from "ionicons/icons";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonImg,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonIcon,
    CurrencyPipe
  ]
})
export class ProductCardComponent implements OnInit {
  public product = input<Product>();

  constructor() {
    addIcons({
      'add-outline': addOutline,
      'heart': heart,
    })
  }

  ngOnInit() {
  }

}
