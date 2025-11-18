import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {logoFacebook, logoInstagram, logoLinkedin, logoTwitter} from "ionicons/icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonImg, IonButton, IonText, IonIcon, RouterLink]
})
export class OnboardingPage implements OnInit {

  constructor() {
    addIcons({
      'logo-facebook': logoFacebook,
      'logo-twitter': logoTwitter,
      'logo-instagram': logoInstagram,
      'logo-linkedin': logoLinkedin,
    })
  }

  ngOnInit() {
  }

}
