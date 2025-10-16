import {Component, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItemGroup,
  IonLabel,
  IonList,
  IonListHeader,
  IonSkeletonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {chevronDownOutline} from "ionicons/icons";
import {BannerComponent} from "../../../shared/components/banner/banner.component";
import {RestaurantComponent} from "../../../shared/components/restaurant/restaurant.component";
import {LoadingRestaurantComponent} from "../../../shared/components/loading-restaurant/loading-restaurant.component";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonList, IonListHeader, IonLabel, BannerComponent, RestaurantComponent, IonItemGroup, IonSkeletonText, LoadingRestaurantComponent, RouterLink],

})
export class HomePage implements OnInit {
  public isLoading = signal(false);
  public banners: any[] = [];
  public restaurants: any[] = [];


  constructor() {
    addIcons({
      chevronDownOutline,
    })
  }

  ngOnInit() {
    this.isLoading.set(true);
    setTimeout(() => {
      this.banners = [
        {banner: 'assets/imgs/1.jpg'},
        {banner: 'assets/imgs/2.jpg'},
        {banner: 'assets/imgs/3.jpg'}
      ];
      this.restaurants = [
        {
          uid: '12wefdss',
          cover: 'assets/imgs/1.jpg',
          name: 'Stayfit',
          short_name: 'stayfit',
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
          distance: 2.5,
          price: 100
        },
      ];
      this.isLoading.set(false);
    }, 500)
  }


}
