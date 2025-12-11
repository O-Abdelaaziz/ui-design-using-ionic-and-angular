import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {Gift} from "../models/gift.model";

export interface CartItem extends Gift {
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly CART_STORAGE_KEY = 'cart_items';
  private _cartItems = new BehaviorSubject<Map<string, CartItem>>(new Map());
  public cartItems$ = this._cartItems.asObservable();
  public itemCount$ = this.cartItems$.pipe(
    map(items => Array.from(items.values()).reduce((acc, item) => acc + item.quantity, 0))
  );
  public totalPrice$ = this.cartItems$.pipe(
    map(items => Array.from(items.values()).reduce((acc, item) =>
      acc + (item.price * item.quantity), 0))
  );

  constructor() {
    this._loadFromStorage();
  }

  private _loadFromStorage(): void {
    const storedItems = localStorage.getItem(this.CART_STORAGE_KEY);
    if (storedItems) {
      try {
        const parsedItems = JSON.parse(storedItems);
        const cartMap = new Map<string, CartItem>(Object.entries(parsedItems));
        this._cartItems.next(cartMap);
      } catch (e) {
        console.error('Error parsing cart items from storage', e);
        this._clearStorage();
      }
    }
  }

  private _saveToStorage(items: Map<string, CartItem>): void {
    const itemsObject = Object.fromEntries(items);
    localStorage.setItem(this.CART_STORAGE_KEY, JSON.stringify(itemsObject));
  }

  //alternative for _saveToStorage without updating tsconfig.json (lib from es2018 to es2019)
  // private _saveToStorage(items: Map<string, CartItem>): void {
  //   // Workaround for environments without Object.fromEntries (ES2019+)
  //   const itemsObject: { [key: string]: CartItem } = {};
  //
  //   items.forEach((value, key) => {
  //     itemsObject[key] = value;
  //   });
  //
  //   // Or using reduce:
  //   // const itemsObject = Array.from(items.entries()).reduce((obj, [key, value]) => {
  //   //     obj[key] = value;
  //   //     return obj;
  //   // }, {} as { [key: string]: CartItem });
  //
  //   localStorage.setItem(this.CART_STORAGE_KEY, JSON.stringify(itemsObject));
  // }

  private _clearStorage(): void {
    localStorage.removeItem(this.CART_STORAGE_KEY);
  }

  addToCart(gift: Gift, quantity: number = 1): void {
    const currentItems = new Map(this._cartItems.value);
    const existingItem = currentItems.get(gift.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      currentItems.set(gift.id, {...gift, quantity});
    }

    this._cartItems.next(currentItems);
    this._saveToStorage(currentItems);
  }

  removeFromCart(giftId: string, quantity: number = 1): void {
    const currentItems = new Map(this._cartItems.value);
    const existingItem = currentItems.get(giftId);

    if (!existingItem) return;

    if (existingItem.quantity <= quantity) {
      currentItems.delete(giftId);
    } else {
      existingItem.quantity -= quantity;
    }

    this._cartItems.next(currentItems);
    this._saveToStorage(currentItems);
  }

  updateQuantity(giftId: string, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(giftId);
      return;
    }

    const currentItems = new Map(this._cartItems.value);
    const existingItem = currentItems.get(giftId);

    if (existingItem) {
      existingItem.quantity = quantity;
      this._cartItems.next(currentItems);
      this._saveToStorage(currentItems);
    }
  }

  clearCart(): void {
    this._cartItems.next(new Map());
    this._clearStorage();
  }

  getCartItems(): Observable<CartItem[]> {
    return this.cartItems$.pipe(
      map(items => Array.from(items.values()))
    );
  }

  getCartItem(giftId: string): CartItem | undefined {
    return this._cartItems.value.get(giftId);
  }

  isInCart(giftId: string): boolean {
    return this._cartItems.value.has(giftId);
  }
}
