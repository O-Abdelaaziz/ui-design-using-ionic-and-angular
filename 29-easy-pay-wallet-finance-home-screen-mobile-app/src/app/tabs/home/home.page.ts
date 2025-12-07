import {Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, input, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemGroup,
  IonLabel,
  IonList,
  IonListHeader,
  IonRow,
  IonText,
  IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {IonicSlides} from "@ionic/angular";
import {addIcons} from "ionicons";
import {addCircle, card, newspaper, paperPlane, send} from 'ionicons/icons';
import {register} from "swiper/element/bundle";

register()

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonLabel, IonText, IonAvatar, IonRow, IonCol, IonGrid, IonButton, IonList, IonListHeader, IonItemGroup, IonItem, IonThumbnail],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {
  accounts = [
    {id: 1, acc_no: '57868945098', balance: '200000'},
    {id: 2, acc_no: '20067091201', balance: '50000'},
    {id: 3, acc_no: '40163081205', balance: '80000'}
  ];
  features = [
    {id: 1, color: 'tertiary', icon: 'paper-plane', name: 'Send'},
    {id: 2, color: 'white', icon: 'send', name: 'Request'},
    {id: 3, color: 'success', icon: 'add-circle', name: 'Top-up'},
    {id: 4, color: 'light', icon: 'newspaper', name: 'Bills'},
    {id: 5, color: 'warning', icon: 'card', name: 'Cards'},
  ];
  transactions = [
    {id: 1, to: 'jhon Doe', date: '2022-05-22', amount: 5000},
    {id: 2, to: 'jhon Doe', date: '2022-03-02', amount: 7000},
    {id: 3, to: 'jhon Doe', date: '2022-07-28', amount: -3250},
    {id: 4, to: 'jhon Doe', date: '2022-01-09', amount: 1000},
    {id: 5, to: 'jhon Doe', date: '2022-04-13', amount: -800},
  ];

  swiperModules = [IonicSlides];
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;

  config = input<{
    slidesPerView: number;
    spaceBetween?: number;
    // keyboard?: boolean;
    // mousewheel?: boolean;
    // pagination?: any;
    // navigation?: boolean;
    // initialSlide?: number;
    // centeredSlides?: boolean;
    // autoplay?: boolean;
    // loop?: boolean;
    // breakpoints?: {
    //   [key: string]: {
    //     slidesPerView: number;
    //     spaceBetween?: number;
    //   };
    // };
  }>();

  ngOnInit() {
  }

  constructor() {
    addIcons({
      'paper-plane': paperPlane,
      'send': send,
      'add-circle': addCircle,
      'newspaper': newspaper,
      'card': card,
    })
  }
}
