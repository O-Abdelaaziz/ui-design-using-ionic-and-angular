import {Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, OnInit, viewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

import {register} from 'swiper/element/bundle';
import {IonicSlides} from "@ionic/angular";
import {addIcons} from "ionicons";
import {arrowForwardOutline, chevronBackOutline, chevronForwardOutline, rocketOutline} from "ionicons/icons";
import {Router} from "@angular/router";

register();

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, IonFab, IonFabButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomePage implements OnInit {
  private _router = inject(Router)

  public swiperRef = viewChild<ElementRef>("swiper");
  public swiperModules = [IonicSlides];
  public isFirstSlide = true;
  public onboardingScreens = [
    {
      title: 'Welcome to our app',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: './assets/images/slide_1.png'
    },
    {
      title: 'Enjoy your day',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: './assets/images/slide_2.png'
    },
    {
      title: 'Feel free to use our app',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: './assets/images/slide_3.png'
    }
  ]
  currentSlideIndex = 0;

  constructor() {
    addIcons({
      chevronBack: chevronBackOutline,
      chevronForward: chevronForwardOutline,
      arrowBack: chevronBackOutline,
      arrowForward: chevronForwardOutline,
      rocketOutline: rocketOutline,
      arrowForwardOutline: arrowForwardOutline,
    })
  }

  ngOnInit() {
  }

  onGoNext() {
    this.swiperRef()?.nativeElement.swiper.slideNext();
  }

  onGoBack() {
    this.swiperRef()?.nativeElement.swiper.slidePrev();
  }

  onSkip() {
    this._router.navigate(['/home'])
  }

  onGetStarted() {
    this._router.navigate(['/home'])
  }

  onSlideChange(event: any) {
    // this.currentSlideIndex = event.detail[0].activeIndex;
    this.currentSlideIndex = this.swiperRef()?.nativeElement.swiper.activeIndex;
  }
}
