import {Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent, IonFooter,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonToolbar
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {notificationsOutline, searchOutline} from "ionicons/icons";
import {register} from 'swiper/element/bundle';
import {AnimationController} from "@ionic/angular";

register();

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonIcon, RouterLink, IonCol, IonRow, IonSegment, IonSegmentButton, IonLabel, IonFooter],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemDetailsPage implements OnInit {

  private _animationController = inject(AnimationController);

  selectedSize: number = 0;
  selectedColor: number = 0;
  activeVariation: string = '';

  constructor() {
    addIcons({
      searchOutline,
      notificationsOutline
    })
  }

  ngOnInit() {
    this.activeVariation = 'size';
  }

  segmentChanged(e: any) {
    this.activeVariation = e.detail.value;

    if (this.activeVariation == 'color') {
      this._animationController.create()
        // @ts-ignore
        .addElement(document.querySelector('.sizes'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(0px)', 'translateX(100%)')
        .fromTo('opacity', '1', '0.2')
        .play();

      this._animationController.create()
        // @ts-ignore
        .addElement(document.querySelector('.colors'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
        .fromTo('opacity', '0.2', '1')
        .play();
    } else {
      this._animationController.create()
        // @ts-ignore
        .addElement(document.querySelector('.sizes'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(100%)', 'translateX(0)')
        .fromTo('opacity', '0.2', '1')
        .play();

      this._animationController.create()
        // @ts-ignore
        .addElement(document.querySelector('.colors'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(0px)', 'translateX(-100%)')
        .fromTo('opacity', '1', '0.2')
        .play();
    }
  }

  changeSize(size: number) {
    this.selectedSize = size;
  }

  changeColor(color: number) {
    this.selectedColor = color;
  }
}
