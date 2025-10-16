import {Component, ElementRef, OnInit, signal, ViewChild, viewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonItemGroup, IonLabel, IonList, IonListHeader,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {LoadingRestaurantComponent} from "../../../shared/components/loading-restaurant/loading-restaurant.component";
import {RestaurantComponent} from "../../../shared/components/restaurant/restaurant.component";
import {EmptyScreenComponent} from "../../../shared/components/empty-screen/empty-screen.component";
import {addIcons} from "ionicons";
import {restaurant} from "ionicons/icons";
import {RouterLink} from "@angular/router";

const data = [
  {
    uid: '12wefdss',
    cover: 'assets/imgs/1.jpg',
    name: 'Stayfit',
    short_name: 'stayfit',
    address: 'Karol Bagh, New Delhi',
    cuisines: [
      'Italian',
      'Mexican'
    ],
    rating: 5,
    delivery_time: 25,
    distance: 2.5,
    price: 100
  },
  {
    uid: '12wefdefsdss',
    cover: 'assets/imgs/2.jpg',
    name: 'Stayfit1',
    short_name: 'stayfit1',
    cuisines: [
      'Italian',
      'Mexican'
    ],
    rating: 5,
    delivery_time: 25,
    address: 'Karol Bagh, New Delhi',
    distance: 2.5,
    price: 100
  },
  {
    uid: '12wefdssrete',
    cover: 'assets/imgs/3.jpg',
    name: 'Stayfit2',
    short_name: 'stayfit2',
    cuisines: [
      'Italian',
      'Mexican'
    ],
    rating: 5,
    delivery_time: 25,
    address: 'Karol Bagh, New Delhi',
    distance: 2.5,
    price: 100
  },
];

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSearchbar, IonGrid, IonRow, IonCol, LoadingRestaurantComponent, IonList, IonListHeader, IonLabel, IonItemGroup, RestaurantComponent, EmptyScreenComponent, RouterLink]
})
export class SearchPage implements OnInit {
  public isLoading = signal(false);
  public searchInput = viewChild.required<IonSearchbar>('searchInput');
  public allRestaurants = data;
  public restaurants: any[] = [];
  public query: any;
  public model = {
    icon: 'restaurant',
    color: 'primary',
    title: 'No restaurants found',
    subTitle: 'We could not find any restaurants matching your search. Please try again.'
  }

  constructor() {
    addIcons({
      restaurant,
    })
  }

  ngOnInit() {
    setTimeout(() => {
      this.searchInput().setFocus();
    }, 500);
  }

  onSearchChange(event: any) {
    this.query = event.detail.value?.toLowerCase() || '';
    this.restaurants = [];

    if (!this.query) {
      return;
    }

    this.isLoading.set(true);

    setTimeout(() => {
      this.restaurants = this.allRestaurants.filter(restaurant =>
        restaurant.short_name.toLowerCase().includes(this.query)
      );
      this.isLoading.set(false);
    }, 500);
  }
}
