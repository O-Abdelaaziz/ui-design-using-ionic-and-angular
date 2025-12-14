import {Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons, IonCol,
  IonContent, IonFabButton, IonFooter,
  IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonRow, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Product} from "../../../shared/models/product.model";
import {Seller} from "../../../shared/models/seller.model";
import {Category} from "../../../shared/models/category.model";
import {ProductService} from "../../../shared/services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {addIcons} from "ionicons";
import {
  addOutline,
  bagHandle, bagHandleOutline,
  call,
  chatboxEllipses,
  chatboxEllipsesOutline, chevronDownOutline, heart,
  heartOutline, removeOutline,
  shareSocialOutline,
  star,
  starOutline
} from "ionicons/icons";
import {ProductComponent} from "../../../shared/components/product/product.component";
import {VegNonvegIndicatorComponent} from "../../../shared/widgets/veg-nonveg-indicator/veg-nonveg-indicator.component";
import {ImageRectBoxComponent} from "../../../shared/widgets/image-rect-box/image-rect-box.component";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonButton, IonIcon, IonAvatar, ProductComponent, IonFooter, IonFabButton, IonRow, IonCol, IonList, IonItem, IonLabel, VegNonvegIndicatorComponent, IonListHeader, IonText, ImageRectBoxComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductDetailsPage implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  public readMore = signal<boolean>(false);
  public productDetails = signal<
    (Product & { seller?: Seller; category?: Category }) | null
  >(null);
  public id!: number;

  constructor() {
    addIcons({
      heartOutline,
      shareSocialOutline,
      star,
      chatboxEllipses,
      call, bagHandle,
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if (!id) {
      return;
    }

    this.id = parseInt(id);
    const product = this.productService.getProductById(this.id);
    console.log(product);

    if (product) this.productDetails.set(product);
  }

  // private route = inject(ActivatedRoute);
  // private router = inject(Router);
  // private productService = inject(ProductService);
  //
  // productDetails = signal<Product | null>(null);
  // similarProducts = signal<Product[]>([]);
  // quantity = signal(1);
  // readMore = signal(false);
  // wishlist: number[] = []; // Replace with your wishlist service
  //
  // constructor() {
  //   addIcons({
  //     heartOutline,
  //     shareSocialOutline,
  //     star,
  //     heart,
  //     starOutline,
  //     chatboxEllipsesOutline,
  //     bagHandleOutline,
  //     removeOutline,
  //     addOutline,
  //     chevronDownOutline
  //   });
  // }
  //
  // ngOnInit() {
  //   const productId = this.route.snapshot.paramMap.get('id');
  //   if (productId) {
  //     this.loadProductDetails(parseInt(productId));
  //   }
  // }
  //
  // loadProductDetails(productId: number) {
  //   const product = this.productService.getProductById(productId);
  //   if (product) {
  //     this.productDetails.set(product);
  //     this.loadSimilarProducts(product.category_id, productId);
  //   } else {
  //     // Handle product not found
  //     this.router.navigate(['/tabs/home']);
  //   }
  // }
  //
  // loadSimilarProducts(categoryId: number, excludeProductId: number) {
  //   const products = this.productService.getProductsByCategory(categoryId)
  //     .filter(p => p.id !== excludeProductId)
  //     .slice(0, 4);
  //   this.similarProducts.set(products);
  // }
  //
  // increaseQuantity() {
  //   this.quantity.update(q => q + 1);
  // }
  //
  // decreaseQuantity() {
  //   if (this.quantity() > 1) {
  //     this.quantity.update(q => q - 1);
  //   }
  // }
  //
  // addToCart() {
  //   if (this.productDetails()) {
  //     // Implement your cart service
  //     console.log('Added to cart:', {
  //       ...this.productDetails(),
  //       quantity: this.quantity()
  //     });
  //     // Show success message
  //   }
  // }
  //
  // toggleWishlist() {
  //   if (!this.productDetails()) return;
  //
  //   const productId = this.productDetails()!.id;
  //   const index = this.wishlist.indexOf(productId);
  //
  //   if (index > -1) {
  //     this.wishlist.splice(index, 1);
  //   } else {
  //     this.wishlist.push(productId);
  //   }
  //   // Update wishlist in your service
  // }
  //
  // isInWishlist(): boolean {
  //   if (!this.productDetails()) return false;
  //   return this.wishlist.includes(this.productDetails()!.id);
  // }
  //
  // shareProduct() {
  //   if (navigator.share) {
  //     navigator.share({
  //       title: this.productDetails()?.name,
  //       text: `Check out ${this.productDetails()?.name} on our app!`,
  //       url: window.location.href,
  //     }).catch(console.error);
  //   } else {
  //     // Fallback for browsers that don't support Web Share API
  //     console.log('Web Share API not supported');
  //     // Optionally implement a custom share dialog
  //   }
  // }
  //
  // calculateDiscount(): number {
  //   const product = this.productDetails();
  //   if (!product || !product.default_price || !product.cut_price) return 0;
  //   return Math.round(((product.default_price - product.cut_price) / product.default_price) * 100);
  // }
  //
  // navigateToProduct(productId: number) {
  //   this.router.navigate(['/products', productId]);
  // }
}
