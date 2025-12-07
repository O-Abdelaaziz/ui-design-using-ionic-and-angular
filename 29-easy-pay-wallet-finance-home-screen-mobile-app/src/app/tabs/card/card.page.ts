import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader, IonItem, IonItemGroup,
  IonLabel,
  IonList,
  IonListHeader,
  IonRow, IonText,
  IonTitle, IonToggle,
  IonToolbar
} from '@ionic/angular/standalone';
import {register} from "swiper/element/bundle";
import {SwiperOptions} from "swiper/types";

register()
@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRow, IonList, IonListHeader, IonLabel, IonItemGroup, IonItem, IonToggle, IonText],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardPage implements OnInit {

  bannerConfig!: SwiperOptions;
  cards: any[] = [];

  constructor() {
  }

  ngOnInit() {
    this.cards = [
      {
        id: 1,
        company_img: 'assets/images/mastercard.png',
        card_no: '5786 8945 9098 1100',
        card_holder: 'Nikhil Ag.',
        exp_date: '08/24'
      },
      {
        id: 2,
        company_img: 'assets/images/visa.png',
        card_no: '2006 7091 2014 8766',
        card_holder: 'Nikhil Ag.',
        exp_date: '11/29'
      },
      {
        id: 3,
        company_img: 'assets/images/mastercard.png',
        card_no: '4016 3081 2056 7890',
        card_holder: 'Nikhil Ag.',
        exp_date: '06/25'
      }
    ];
  }

  ngAfterContentChecked() {
    this.bannerConfig = {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 40,
      pagination: {clickable: true}
    };

  }
}
