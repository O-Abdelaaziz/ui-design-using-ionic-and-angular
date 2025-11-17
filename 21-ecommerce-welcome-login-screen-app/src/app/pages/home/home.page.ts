import {Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonButton, IonIcon, IonItem, IonInput, IonCol, IonRouterLink
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {funnelOutline, notificationsOutline, searchOutline} from "ionicons/icons";
import {ICategory} from "../../shared/models/icategory.model";
import {DataService} from "../../shared/services/data.service";
import {register} from 'swiper/element/bundle';
import {IProduct} from "../../shared/models/iproduct.model";
import {CurrencyPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

register();

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonButtons, IonMenuButton, IonButton, IonIcon, IonItem, IonInput, IonCol, CurrencyPipe, IonHeader, IonToolbar, RouterLink, IonRouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {
  public categories = signal<ICategory[]>([]);
  public featuredProducts = signal<IProduct[]>([]);
  public bestSellProducts = signal<IProduct[]>([]);

  private _dataService = inject(DataService);

  constructor() {
    addIcons({
      notificationsOutline,
      funnelOutline,
      searchOutline
    })
  }

  ngOnInit(): void {
    this.categories.set(this._dataService.getCategories());
    this.featuredProducts.set(this._dataService.getFeaturedProducts());
    this.bestSellProducts.set(this._dataService.getBestSellProducts());
  }
}
