import {Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild, viewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton, IonCol,
  IonContent, IonFooter, IonGrid,
  IonHeader,
  IonImg,
  IonLabel,
  IonRow, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {register} from 'swiper/element/bundle';
import {RouterLink} from "@angular/router";

register();

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonImg, IonRow, IonLabel, IonButton, IonFooter, IonCol, IonGrid, IonText, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomePage implements OnInit {
  // public swiperRef = viewChild<ElementRef | undefined>("swiper");
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;

  public slides = [
    {
      id: 1,
      title: "Welcome to our app",
      description: "Your journey to the world starts here",
      image: "./assets/images/slide-01.jpg"
    },
    {
      id: 2,
      title: "Enjoy the journey",
      description: "We are here to make your journey more enjoyable",
      image: "./assets/images/slide-02.jpg"
    },
    {
      id: 3,
      title: "Earn while you travel",
      description: "You can earn while you travel",
      image: "./assets/images/slide-03.jpg"
    },
    {
      id: 4,
      title: "Explore the world",
      description: "Discover the beauty of nature and culture",
      image: "./assets/images/slide-04.jpg"
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    //this.swiperRef?.nativeElement.swiper?.slideTo(0);
    this.swiperRef?.nativeElement.swiper.autoplay.start();
  }

}
