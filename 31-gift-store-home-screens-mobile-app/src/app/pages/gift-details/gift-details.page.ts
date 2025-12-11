import {Component, inject, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonBackButton,
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonText,
  IonToolbar,
  NavController,
  ToastController
} from '@ionic/angular/standalone';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {GiftService} from "../../shared/services/gift.service";
import {Gift} from "../../shared/models/gift.model";
import {bagHandle, bagHandleOutline, bookmark, heart, star} from "ionicons/icons";
import {addIcons} from "ionicons";
import {CartService} from "../../shared/services/cart.service";

@Component({
  selector: 'app-gift-details',
  templateUrl: './gift-details.page.html',
  styleUrls: ['./gift-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonIcon, IonItem, IonLabel, IonText, IonFooter, IonButton, IonBadge, RouterLink]
})
export class GiftDetailsPage implements OnInit {
  private _navController = inject(NavController);
  private _toastController = inject(ToastController);
  private _activatedRoute = inject(ActivatedRoute);
  private _giftService = inject(GiftService);
  private _cartService = inject(CartService);

  public gift = signal<Gift | undefined>(undefined);
  public addToCart = signal<string | null>(null);
  public totalGifts = signal<number>(5);

  constructor() {
    addIcons({
      star: star,
      bagHandle: bagHandle,
      bagHandleOutline: bagHandleOutline,
      heart: heart,
      bookmark: bookmark,
    })
  }

  ngOnInit() {
    const id = this._activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.gift.set(this._giftService.getGift(id));
      console.log(this.gift())
    } else {
      this._navController.back();
    }

    this._cartService.cartItems$.subscribe((cartItems) => {
      this.totalGifts.set(cartItems.size);
    });
  }

  addedGiftToCart() {
    // return this.addToCart() ? 'ADDED TO CART' : 'ADD TO CART';
    this._cartService.addToCart(this.gift()!);
    this.addToCart.set('ADDED TO CART');
    this._toastController.create({
      cssClass: 'text-light',
      icon: 'bag-handle',
      message: 'Gift added to cart',
      duration: 2000,
      position: 'top',
    }).then((toast) => toast.present());
    setTimeout(() => {
      this.addToCart.set(null);
    }, 2000)
  }
}
