import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonList,
  IonItem,
  IonRadio,
  IonLabel,
  IonRadioGroup,
  IonIcon,
  ModalController, IonText, IonButtons
} from '@ionic/angular/standalone';
import {Coupon} from "../../shared/models/coupon.model";
import {addIcons} from "ionicons";
import {close, timeOutline} from 'ionicons/icons';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.page.html',
  styleUrls: ['./coupon.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonList,
    IonItem,
    IonRadio,
    IonLabel,
    IonRadioGroup,
    IonIcon,
    IonText,
    IonButtons
  ]
})
export class CouponPage implements OnInit {

  private modalCtrl = inject(ModalController);

  selectedCoupon: any = null;
  appliedCoupon: any = null;

  // Sample coupons - in a real app, these would come from your backend
  coupons: Coupon[] = [
    {
      code: 'WELCOME10',
      discount: 0.1,
      description: '10% off your first order',
      validUntil: new Date(2024, 11, 31)
    },
    {
      code: 'SAVE20',
      discount: 0.2,
      description: '20% off on all items',
      validUntil: new Date(2024, 11, 31)
    },
    {
      code: 'FREESHIP',
      discount: 0,
      description: 'Free shipping on your order',
      validUntil: new Date(2024, 11, 31)
    }
  ];

  constructor() {
    addIcons({
      close: close,
      timeOutline: timeOutline,
    });
  }

  ngOnInit() {
  }

  selectCoupon(coupon: any) {
    this.selectedCoupon = coupon;
  }

  applyCoupon() {
    if (this.selectedCoupon) {
      this.modalCtrl.dismiss({coupon: this.selectedCoupon});
    }
  }

  removeCoupon() {
    this.modalCtrl.dismiss({coupon: null});
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
