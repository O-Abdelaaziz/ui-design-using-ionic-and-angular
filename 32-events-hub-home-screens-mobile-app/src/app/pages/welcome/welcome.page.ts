import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonButton, IonContent, IonFooter, IonText, IonToolbar} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import {register} from "swiper/element/bundle";
import {IonicSlides} from "@ionic/angular";

register()

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonFooter, IonToolbar, IonButton, RouterLink, IonText],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomePage implements OnInit {
  public swiperModules = [IonicSlides];
  onboardingScreens = [
    {
      title: 'Welcome to EventsHub',
      description: 'The best place to find events',
      image: './assets/images/onboarding/1.jpg'
    },
    {
      title: 'Welcome to EventsHub',
      description: 'The best place to find events',
      image: './assets/images/onboarding/2.jpg'
    },
    {
      title: 'Welcome to EventsHub',
      description: 'The best place to find events',
      image: './assets/images/onboarding/3.jpg'
    }
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
