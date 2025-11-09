import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader, IonIcon, IonInput, IonItem,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {
  arrowBackOutline, lockClosedOutline,
  logoFacebook,
  logoGoogle,
  logoInstagram,
  logoLinkedin,
  logoTwitter,
  mailOutline, person, personOutline
} from "ionicons/icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonButton, IonCard, IonCardContent, IonIcon, IonInput, IonItem, RouterLink]
})
export class RegisterPage implements OnInit {

  constructor() {
    addIcons({
      'arrow-back': arrowBackOutline,
      'logo-facebook': logoFacebook,
      'logo-google': logoGoogle,
      'logo-twitter': logoTwitter,
      'logo-linkedin': logoLinkedin,
      'logo-instagram': logoInstagram,
      'mail': mailOutline,
      'lock': lockClosedOutline,
      'person': personOutline
    })
  }

  ngOnInit() {
  }

}
