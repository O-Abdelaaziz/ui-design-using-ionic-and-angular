import {Component, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {arrowForwardOutline, paperPlaneOutline, search, searchOutline} from "ionicons/icons";
import {ListHeaderComponent} from "../../../components/list-header/list-header.component";
import {HorizontalListComponent} from "../../../components/horizontal-list/horizontal-list.component";
import {brands} from "../../../mock-data/brands";
import {banners} from "../../../mock-data/banners";
import {Brand} from "../../../interfaces/brand.interface";
import {Car} from "../../../interfaces/car.interface";
import {Banner} from "../../../interfaces/banner.interface";
import {cars} from "../../../mock-data/cars";
import {CardItemComponent} from "../../../components/card-item/card-item.component";
import {BrandItemComponent} from "../../../components/brand-item/brand-item.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, IonInput, ListHeaderComponent, HorizontalListComponent, CardItemComponent, IonCard, IonCardContent, IonLabel, IonList, BrandItemComponent]
})
export class HomePage implements OnInit {

  brands = signal<Brand[]>(brands);
  cars = signal<Car[]>(cars);
  recentlyViewedCars = signal<Car[]>(cars.slice(0, 3));
  featuredBanners = signal<Banner[]>(banners);

  constructor() {
    addIcons({
      'search': search,
      'search-outline': searchOutline,
      'paper-plane-outline': paperPlaneOutline,
      'arrow-forward-outline': arrowForwardOutline,
    })
  }

  ngOnInit() {
  }
}
