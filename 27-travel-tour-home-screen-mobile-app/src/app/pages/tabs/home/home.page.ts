import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonAvatar, IonBadge,
  IonButton,
  IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonCol,
  IonContent, IonFabButton, IonGrid,
  IonHeader,
  IonIcon, IonImg, IonItem, IonLabel, IonRow, IonSearchbar, IonText, IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {
  chevronDownOutline,
  chevronForwardOutline, heart,
  heartOutline,
  notifications,
  notificationsOutline, searchOutline
} from "ionicons/icons";
import {register} from "swiper/element/bundle";
import {RouterLink} from "@angular/router";

register()

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, IonAvatar, IonImg, IonGrid, IonCol, IonRow, IonLabel, IonSearchbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonItem, IonThumbnail, IonBadge, IonChip, IonText, IonFabButton, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {

  categories = [
    {id: 1, name: 'Camp', image: 'assets/images/cat-01.jpg'},
    {id: 2, name: 'Mountains', image: 'assets/images/cat-02.jpg'},
    {id: 3, name: 'Trekking', image: 'assets/images/cat-03.jpg'},
    {id: 4, name: 'Lake', image: 'assets/images/cat-04.jpg'},
  ];

  trips = [
    {
      id: 1,
      name: 'United States',
      category: 'Camp',
      image: 'assets/images/trip-01.jpg',
      price: '12K',
      isFavorite: true
    },
    {
      id: 2,
      name: 'Swiss Alps',
      category: 'Mountains',
      image: 'assets/images/trip-02.jpg',
      price: '20K',
      isFavorite: false
    },
    {
      id: 3,
      name: 'Adi Kailash',
      category: 'Trekking',
      image: 'assets/images/trip-03.jpg',
      price: '5K',
      isFavorite: false
    },
    {id: 4,
      name: 'Tarsar Lake',
      category: 'Lake',
      image: 'assets/images/trip-03.jpg',
      price: '15K',
      isFavorite: false},
  ];

  constructor() {
    addIcons({
      'notifications': notificationsOutline,
      'chevron-down-outline': chevronDownOutline,
      'chevron-forward-outline': chevronForwardOutline,
      'heart-outline': heartOutline,
      'heart': heart,
      'search-outline': searchOutline,
    })
  }

  toggleFavorite(trip: any) {
    trip.isFavorite = !trip.isFavorite;
  }

  ngOnInit() {
  }

}
