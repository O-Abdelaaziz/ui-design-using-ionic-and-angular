import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonBackButton, IonButton,
  IonButtons, IonCol,
  IonContent, IonFooter,
  IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel,
  IonList, IonListHeader, IonNote, IonRow, IonText, IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {EmptyScreenComponent} from "../../../shared/components/empty-screen/empty-screen.component";
import {Preferences} from "@capacitor/preferences";
import {Router} from "@angular/router";
import moment from "moment";
import {CartItemComponent} from "../../../shared/components/cart-item/cart-item.component";
import {
  addOutline,
  ellipsisHorizontalOutline,
  ellipsisVerticalOutline,
  homeOutline,
  removeOutline
} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, EmptyScreenComponent, IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonText, IonNote, IonIcon, IonInput, IonListHeader, IonFooter, IonRow, IonCol, IonButton, CartItemComponent]
})
export class CartPage implements OnInit {
  @ViewChild(IonContent, {static: false}) content: any = '';
  urlCheck: any;
  url: any;
  model: any = {};
  deliveryCharge = 20;
  instruction: any;
  location: any = {};

  constructor(
    private router: Router
  ) {
    addIcons({
      removeOutline,
      addOutline,
      homeOutline,
      ellipsisVerticalOutline,
      ellipsisHorizontalOutline
    })
  }

  ngOnInit() {
    this.checkUrl();
    this.getModel();
  }

  getCart() {
    return Preferences.get({key: 'cart'});
  }

  async getModel() {
    let data: any = await this.getCart();
    this.location = {
      lat: 28.653831,
      lng: 77.188257,
      address: 'Karol Bagh, New Delhi'
    };
    if (data?.value) {
      this.model = await JSON.parse(data.value);
      console.log(this.model);
      this.calculate();
    }
  }

  async calculate() {
    let item = this.model.items.filter((x: any) => x.quantity > 0);
    this.model.items = item;
    this.model.totalPrice = 0;
    this.model.totalItem = 0;
    this.model.deliveryCharge = 0;
    this.model.grandTotal = 0;
    item.forEach((element: any) => {
      this.model.totalItem += element.quantity;
      this.model.totalPrice += (parseFloat(element.price) * parseFloat(element.quantity));
    });
    this.model.deliveryCharge = this.deliveryCharge;
    this.model.totalPrice = parseFloat(this.model.totalPrice).toFixed(2);
    this.model.grandTotal = (parseFloat(this.model.totalPrice) + parseFloat(this.model.deliveryCharge)).toFixed(2);
    if (this.model.totalItem == 0) {
      this.model.totalItem = 0;
      this.model.totalPrice = 0;
      this.model.grandTotal = 0;
      await this.clearCart();
      this.model = null;
    }
    console.log('cart: ', this.model);
  }

  clearCart() {
    return Preferences.remove({key: 'cart'});
  }

  checkUrl() {
    let url: any = (this.router.url).split('/');
    console.log('url: ', url);
    const spliced = url.splice(url.length - 2, 2); // /tabs/cart url.length - 1 - 1
    this.urlCheck = spliced[0];
    console.log('urlcheck: ', this.urlCheck);
    url.push(this.urlCheck);
    this.url = url;
    console.log(this.url);
  }

  getPreviousUrl() {
    return this.url.join('/');
  }

  quantityPlus(index: any) {
    try {
      console.log(this.model.items[index]);
      if (!this.model.items[index].quantity || this.model.items[index].quantity == 0) {
        this.model.items[index].quantity = 1;
        this.calculate();
      } else {
        this.model.items[index].quantity += 1; // this.model.items[index].quantity = this.model.items[index].quantity + 1
        this.calculate();
      }
    } catch (e) {
      console.log(e);
    }
  }

  quantityMinus(index: any) {
    if (this.model.items[index].quantity !== 0) {
      this.model.items[index].quantity -= 1; // this.model.items[index].quantity = this.model.items[index].quantity - 1
    } else {
      this.model.items[index].quantity = 0;
    }
    this.calculate();
  }

  addAddress() {
  }

  changeAddress() {
  }

  makePayment() {
    try {
      const data = {
        restaurant_id: this.model.restaurant.uid,
        res: this.model.restaurant,
        order: JSON.stringify(this.model.items),
        time: moment().format('lll'),
        address: this.location,
        total: this.model.totalPrice,
        grandTotal: this.model.grandTotal,
        deliveryCharge: this.deliveryCharge,
        status: 'Created',
        paid: 'COD'
      };
      console.log('order: ', data);
    } catch (e) {
      console.log(e);
    }
  }

  scrollToBottom() {
    this.content.scrollToBottom(500);
  }


}
