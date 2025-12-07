import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonAvatar, IonBadge, IonButton,
  IonButtons, IonCard, IonCol,
  IonContent, IonGrid,
  IonHeader, IonIcon,
  IonLabel, IonRow,
  IonText, IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {cart, cartOutline, chevronDownOutline} from "ionicons/icons";

import {register} from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonAvatar, IonLabel, IonText, IonIcon, IonButton, IonBadge, IonGrid, IonRow, IonCol, IonCard, IonThumbnail],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {
  banners: any[] = [];
  storeTypes: any[] = [];
  selectedStoreType: number | null = null;

  constructor() {
    addIcons({
      chevronDownOutline: chevronDownOutline,
      cart: cart,
    })
  }

  ngOnInit() {
    this.banners = [
      {banner: 'assets/images/1.jpg'},
      {banner: 'assets/images/2.jpg'},
      {banner: 'assets/images/3.jpg'},
      {banner: 'assets/images/4.jpg'},
    ];

    this.storeTypes = [
      {id: 1, name: 'Restaurant', icon: 'shop2.jpg'},
      {id: 2, name: 'Grocery', icon: 'grocery.jpg'},
      {id: 3, name: 'Medicines', icon: 'med2.jpg'},
      {id: 4, name: 'Paan Shop', icon: 'paan.jpg'},
      {id: 5, name: 'Meat & Fish', icon: 'meat.jpg'},
      {id: 6, name: 'Gifts', icon: 'gifts.jpg'},
      {id: 7, name: 'Pet Supplies', icon: 'pet_asset.jpg'}
    ];
  }

  selectStoreType(id: number) {
    this.selectedStoreType = id;
  }

}
