import {Component, inject, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonList,
  IonListHeader,
  IonRow, IonSkeletonText,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
  NavController
} from '@ionic/angular/standalone';
import {ActivatedRoute, Router} from "@angular/router";
import {addIcons} from "ionicons";
import {addCircleOutline, car, cart, cash, removeCircleOutline, star} from "ionicons/icons";
import {ToggleChangeEventDetail} from "@ionic/angular";
import {Preferences} from '@capacitor/preferences';
import {ItemComponent} from "../../../shared/components/item/item.component";
import {LoadingRestaurantComponent} from "../../../shared/components/loading-restaurant/loading-restaurant.component";
import {RestaurantDetailsComponent} from "../../../shared/components/restaurant-details/restaurant-details.component";
import {EmptyScreenComponent, EmptyScreenModel} from "../../../shared/components/empty-screen/empty-screen.component";

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
  standalone: true,
  imports: [FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonGrid, IonCol, IonRow, IonLabel, IonText, IonIcon, IonToggle, IonList, IonListHeader, IonFooter, IonButton, ItemComponent, LoadingRestaurantComponent, IonSkeletonText, RestaurantDetailsComponent, EmptyScreenComponent]
})
export class ItemsPage implements OnInit {
  public id = '';
  public cartData: any = {};
  public data: any = {}
  public items: any[] = [];
  public storedData: any = {};
  public restaurants = [
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
  public isLoading = signal(false);

  categories: any[] = [
    {
      id: "e00",
      name: "Italian",
      uid: "12wefdss"
    },
    {
      id: "e0",
      name: "Mexican",
      uid: "12wefdss"
    },
  ];

  allItems = [
    {
      category_id: "e00",
      cover: "assets/imgs/pizza.jpg",
      desc: "Great in taste",
      id: "i1",
      name: "Pizza",
      price: 120,
      rating: 0,
      status: true,
      uid: "12wefdss",
      variation: false,
      veg: false
    },
    {
      category_id: "e0",
      cover: "assets/imgs/salad.jpg",
      desc: "Great in taste",
      id: "i2",
      name: "Caprese Salad",
      price: 200,
      rating: 0,
      status: true,
      uid: "12wefdss",
      variation: false,
      veg: true
    },
    {
      category_id: "e00",
      cover: "assets/imgs/pasta.jpg",
      desc: "Great in taste",
      id: "i3",
      name: "Pasta",
      price: 150.50,
      rating: 0,
      status: true,
      uid: "12wefdss",
      variation: false,
      veg: false
    },
  ];


  private _navController = inject(NavController);
  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);
  vegOnly: boolean = false;

  // private preferences = inject(Preferences);

  constructor() {
    addIcons({
      star,
      car,
      cart,
      cash,
      removeCircleOutline,
      addCircleOutline,
    })
  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((params) => {
      console.log(params)
      if (!params.has('restaurantId')) {
        this._navController.back();
        return;
      }

      this.id = params.get('restaurantId')!;
      this.getItems();
    })
  }

  getCart() {
    return Preferences.get({key: 'cart'});
  }

  async getItems() {
    this.isLoading.set(true);
    this.data = {};
    this.cartData = {};
    this.storedData = {};

    setTimeout(() => {
      let data: any = this.restaurants.filter((restaurant) => restaurant.uid === this.id);
      this.data = data[0];
      this.categories = this.categories.filter((category) => category.uid === this.id);
      this.items = this.allItems.filter((item) => item.uid === this.id);

      let cart: any = this.getCart();
      console.log('cart: ', cart);
      if (cart?.value) {
        this.storedData = JSON.parse(cart.value);
        console.log('storedData: ', this.storedData);
        if (this.id == this.storedData.restaurant.uid && this.allItems.length > 0) {
          this.allItems.forEach((element: any) => {
            this.storedData.items.forEach((ele: any) => {
              if (element.id != ele.id) return;
              element.quantity = ele.quantity;
            })
          })
        }
        this.cartData.totalItem = this.storedData.totalItem;
        this.cartData.totalPrice = this.storedData.totalPrice;
      }
      this.isLoading.set(false);
    }, 300);
  }

  getCuisines(cuisines: any) {
    return cuisines.join(', ');
  }

  onVegOnlyChange(event: CustomEvent<ToggleChangeEventDetail>) {
    console.log(event.detail.checked);
    this.items = [];
    if (event.detail.checked == true) this.items = this.allItems.filter(x => x.veg === true);
    else this.items = this.allItems;
    console.log('items: ', this.items);
  }

  onAddItem(index: number) {
    try {
      console.log(this.items[index]);
      if (!this.items[index].quantity || this.items[index].quantity == 0) {
        this.items[index].quantity = 1;
        this.calculate();
      } else {
        this.items[index].quantity += 1; // this.items[index].quantity = this.items[index].quantity + 1
        this.calculate();
      }
    } catch (e) {
      console.log(e);
    }
  }

  onRemoveItem(index: number) {
    if (this.items[index].quantity !== 0) {
      this.items[index].quantity -= 1; // this.items[index].quantity = this.items[index].quantity - 1
    } else {
      this.items[index].quantity = 0;
    }
    this.calculate();
  }

  calculate() {
    console.log(this.items);
    this.cartData.items = [];
    let item = this.items.filter(x => x.quantity > 0);
    console.log('added items: ', item);
    this.cartData.items = item;
    this.cartData.totalPrice = 0;
    this.cartData.totalItem = 0;
    item.forEach(element => {
      this.cartData.totalItem += element.quantity;
      this.cartData.totalPrice += (parseFloat(element.price) * parseFloat(element.quantity));
    });
    this.cartData.totalPrice = parseFloat(this.cartData.totalPrice).toFixed(2);
    if (this.cartData.totalItem == 0) {
      this.cartData.totalItem = 0;
      this.cartData.totalPrice = 0;
    }
    console.log('cart: ', this.cartData);
  }

  // calculate() {
  //   this.total = this.items.reduce((total, item) => total + item.quantity * item.price, 0);
  // }
  model: EmptyScreenModel = {
    title: 'No Items',
    subTitle: 'No items found',
    icon: 'restaurant',
    color: 'success'
  };

  async saveToCart() {
    try {
      this.cartData.restaurant = {};
      this.cartData.restaurant = this.data;
      console.log('cartData', this.cartData);
      await Preferences.set({
        key: 'cart',
        value: JSON.stringify(this.cartData)
      });
    } catch (e) {
      console.log(e);
    }
  }

  async viewCart() {
    if (this.cartData.items && this.cartData.items.length > 0) await this.saveToCart();
    console.log('router url: ', this._router.url);
    await this._router.navigate([this._router.url + '/cart']);
  }
}
