import {Component, inject, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonBackButton, IonBadge,
  IonButton,
  IonButtons,
  IonCard, IonCol,
  IonContent, IonFooter,
  IonHeader,
  IonIcon,
  IonItem, IonItemGroup,
  IonLabel, IonList, IonListHeader, IonModal, IonRow,
  IonText,
  IonThumbnail,
  IonTitle,
  IonToolbar, ModalController
} from '@ionic/angular/standalone';
import {CartItem, CartService} from "../../shared/services/cart.service";
import {Router} from "@angular/router";
import {GiftService} from "../../shared/services/gift.service";
import {addIcons} from "ionicons";
import {add, addCircle, card, create, location, pricetagOutline, remove, trash} from "ionicons/icons";
import {EmptyComponent} from "../../shared/components/empty/empty.component";
import {CouponPage} from "../coupon/coupon.page";
import {AddressComponent} from "../../shared/components/address/address.component";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonItem, IonLabel, IonText, IonButton, IonIcon, IonCard, IonThumbnail, IonCol, IonRow, IonList, IonListHeader, IonItemGroup, IonFooter, EmptyComponent, IonBadge]
})
export class CartPage implements OnInit {
  private _cartService = inject(CartService);
  private _giftService = inject(GiftService);
  private _modalController = inject(ModalController);
  private _router = inject(Router);

  public cartItems = signal<CartItem[]>([]);
  public itemCount = 0;
  public totalPrice = 0;
  public previousUrl = signal('');
  public appliedCoupon: any = null;
  public selectedAddress: any = null;
  public isModalOpen = signal(false);
  public presentingElement!: HTMLElement | null;

  constructor() {
    addIcons({
      add: add,
      trash: trash,
      remove: remove,
      card: card,
      pricetag: pricetagOutline,
      location: location,
      addCircle: addCircle,
      create: create,
    })
  }

  ngOnInit() {
    this.checkUrl();
    this._cartService.getCartItems().subscribe((cartItems) => {
      this.cartItems.set(cartItems);
    });
    this._cartService.totalPrice$.subscribe(total => {
      this.totalPrice = total;
    });
    this._cartService.itemCount$.subscribe(count => {
      this.itemCount = count;
    });

    this.presentingElement = document.querySelector('.ion-page');

  }

  checkUrl() {
    // const url=this._router.url;
    // if(url.includes('gifts')){
    //   this._cartService.cartItems$.subscribe((cartItems) => {
    //     this.totalGifts.set(cartItems.size);
    //   });
    // }
    const routeUlr = this._router.url;
    console.log(routeUlr);
    const urlParts = this._router.url.split('/');
    // this.previousUrl.set(urlParts[urlParts.length - 2]);
    urlParts.pop();
    this.previousUrl.set(urlParts.join('/'));
    console.log(this.previousUrl());
  }

  onClearCart() {
    this._cartService.clearCart();
    this.cartItems.set([]);
  }

  onAddToCart(item: CartItem) {
    this._cartService.addToCart(item);
    // this.cartItems.set(this.cartItems().filter((cartItem) => cartItem.id !== item.id));
  }

  onRemoveFromCart(item: CartItem) {
    this._cartService.removeFromCart(item.id);
    //this.cartItems.set(this.cartItems().filter((cartItem) => cartItem.id !== item.id));
  }

  onAddQuantity(item: CartItem) {
    this._cartService.addToCart(item);
    //this.cartItems.set(this.cartItems().filter((cartItem) => cartItem.id !== item.id));
  }

  async applyCoupon() {
    const modal = await this._modalController.create({
      component: CouponPage,
      componentProps: {
        appliedCoupon: this.appliedCoupon
      },
      breakpoints: [0, 0.67],
      initialBreakpoint: 0.7,
      handle: true,
      handleBehavior: 'cycle'
    });

    await modal.present();

    const {data} = await modal.onWillDismiss();
    if (data?.coupon) {
      this.appliedCoupon = data.coupon;
    }
  }

  async openAddressModal() {
    const modal = await this._modalController.create({
      component: AddressComponent,
      // Pass data if editing an existing address
      componentProps: {
        address: this.selectedAddress
      }
    });

    await modal.present();

    const {data} = await modal.onWillDismiss();
    if (data?.confirmed) {
      this.selectedAddress = data.address;
      console.log('Saved address:', data.address);
    }
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen.set(isOpen);
  }

  setClose() {
    this.isModalOpen.set(false);
  }
}
