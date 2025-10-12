import {Component, input, OnInit} from '@angular/core';
import {Car} from "../../interfaces/car.interface";
import {
  IonBadge,
  IonButton,
  IonCard,
  IonIcon,
  IonItem,
  IonLabel,
  IonText,
  IonThumbnail
} from "@ionic/angular/standalone";
import {ViewAllCardsComponent} from "../view-all-cards/view-all-cards.component";
import {CurrencyPipe} from "@angular/common";
import {addIcons} from "ionicons";
import {bookmarkOutline} from "ionicons/icons";

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [
    IonCard,
    ViewAllCardsComponent,
    IonThumbnail,
    IonBadge,
    IonItem,
    IonLabel,
    IonText,
    CurrencyPipe,
    IonButton,
    IonIcon
  ],
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  car = input<Car>();
  isViewAll = input<boolean>();

  constructor() {
    addIcons({
      'bookmark-outline': bookmarkOutline,
    })
  }

  ngOnInit() {
  }

}
