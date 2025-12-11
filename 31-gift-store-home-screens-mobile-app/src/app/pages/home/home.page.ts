import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {
  IonAvatar, IonBackButton, IonBadge,
  IonButton, IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon, IonItem,
  IonLabel, IonList, IonMenuButton,
  IonRow, IonSearchbar, IonSegment, IonSegmentButton,
  IonText, IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {GiftService} from "../../shared/services/gift.service";
import {Gift} from "../../shared/models/gift.model";
import {addIcons} from "ionicons";
import {bagHandle, cart, closeCircle, grid, gridOutline, list, star} from "ionicons/icons";
import {CurrencyPipe, DecimalPipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {CartService} from "../../shared/services/cart.service";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonLabel, IonText, IonIcon, IonButton, DecimalPipe, IonThumbnail, CurrencyPipe, IonSegment, IonSegmentButton, IonList, IonItem, IonAvatar, IonBadge, IonSearchbar, RouterLink, IonButtons, IonMenuButton],
})
export class HomePage implements OnInit {
  private _giftService = inject(GiftService);
  private _cartService = inject(CartService);


  public gifts: WritableSignal<Gift[]> = signal([]);
  public query: WritableSignal<string> = signal('');
  public totalGifts: WritableSignal<number> = signal(0);
  public viewMode: WritableSignal<'grid' | 'list'> = signal('grid');
  public searchQuery: string = '';

  constructor() {
    addIcons({
      star: star,
      cart: cart,
      grid: grid,
      gridOutline: gridOutline,
      list: list,
      closeCircle: closeCircle,
      bagHandle: bagHandle,
    })
  }

  ngOnInit(): void {
    this.loadGifts();

    this._cartService.cartItems$.subscribe((cartItems) => {
      this.totalGifts.set(cartItems.size);
    });
  }

  public loadGifts() {
    this.gifts.set([...this._giftService.getGifts()]);
  }

  public onViewModeChange() {
    console.log('View mode changed to:', this.viewMode);
  }

  public onSearchChange(event: any) {
    console.log('Search value:', event.target.value);
    this.query.set(event.target.value.toLowerCase());
    this.querySearch();
  }

  private querySearch() {
    if (this.query().length > 0) {
      // this.gifts.set(this._giftService.getGifts().filter((gift) => gift.name.toLowerCase().includes(this.query())));
      this.searchGifts();
    } else {
      this.loadGifts();
    }
  }

  private searchGifts() {
    this.gifts.set(this._giftService.getGifts().filter((gift) => gift.name.toLowerCase().includes(this.query())));
  }


  public onSearcheChange(event: any) {
    const query = event.target.value?.toLowerCase() || '';
    this.query.set(query);
    this.querySearch();
  }

  public onSearchCancel() {
    this.searchQuery = '';
    this.query.set('');
    this.loadGifts();
  }
}
