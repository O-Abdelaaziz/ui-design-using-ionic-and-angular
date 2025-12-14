import {Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, inject, input, OnInit, Output} from '@angular/core';
import {IonicSlides} from "@ionic/angular";
import {Product} from "../../models/product.model";
import {IonButton, IonIcon} from "@ionic/angular/standalone";
import {CurrencyPipe} from "@angular/common";
import {Router} from "@angular/router";
import {addIcons} from "ionicons";
import {alertCircle, cartOutline, heart, heartOutline, refreshOutline, star, starOutline} from "ionicons/icons";
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-product-list-horizontal',
  standalone: true,
  templateUrl: './product-list-horizontal.component.html',
  styleUrls: ['./product-list-horizontal.component.scss'],
  imports: [
    IonIcon,
    IonButton,
    CurrencyPipe,
    ProductComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductListHorizontalComponent implements OnInit {
  private _router = inject(Router);

  @Output() addToCart = new EventEmitter<Product>();
  @Output() toggleWishlist = new EventEmitter<Product>();
  @Output() productClick = new EventEmitter<Product>();

  public products = input<Product[]>([]);
  public wishlist: number[] = [];

  public swiperModules = [IonicSlides];
  public isLoading = false;
  public error: string | null = null;

  public breakpoints = {
    320: {slidesPerView: 1.8},
    480: {slidesPerView: 2.5},
    640: {slidesPerView: 3.2},
    768: {slidesPerView: 3.8},
    1024: {slidesPerView: 4.5}
  };

  constructor() {
    addIcons({
      refreshOutline,
      heartOutline,
      heart,
      cartOutline,
      alertCircle,
      star,
      starOutline,
    })
  }

  ngOnInit() {
    this.loadWishlist();
  }

  onProductClick(product: Product, event: Event): void {
    event.stopPropagation();
    this.productClick.emit(product);
    // Or navigate to product detail page
    // this.router.navigate(['/product', product.id]);
  }

  onAddToCart(product: Product, event: Event): void {
    event.stopPropagation();
    this.addToCart.emit(product);
    // Optional: Show toast or feedback
    // this.showAddToCartFeedback();
  }

  onToggleWishlist(product: Product, event: Event): void {
    event.stopPropagation();
    this.toggleWishlist.emit(product);
    this.updateWishlist(product.id);
  }

  isInWishlist(productId: number): boolean {
    return this.wishlist.includes(productId);
  }

  retryLoading(): void {
    this.error = null;
    // Implement your retry logic here
    // this.loadProducts();
  }

  trackByProductId(index: number, product: Product): string | number {
    return product.id || index.toString();
  }

  // Helper methods
  private loadWishlist(): void {
    // Load wishlist from your service or state management
    // Example:
    // this.wishlist = this.wishlistService.getWishlist();
  }

  private updateWishlist(productId: number): void {
    const index = this.wishlist.indexOf(productId);
    if (index > -1) {
      this.wishlist.splice(index, 1);
    } else {
      this.wishlist.push(productId);
    }
    // Optionally save to storage
    // this.wishlistService.updateWishlist(this.wishlist);
  }

  // Optional: Add to cart feedback
  private showAddToCartFeedback(): void {
    // Implement your feedback mechanism (toast, animation, etc.)
    console.log('Product added to cart!');
  }
}
