import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonButton, IonCard, IonCardContent, IonContent, IonIcon, IonInput, IonItem} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {
  arrowBackOutline, lockClosedOutline,
  logoFacebook,
  logoGoogle,
  logoInstagram,
  logoLinkedin,
  logoTwitter,
  mailOutline
} from "ionicons/icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonIcon, IonCard, IonCardContent, IonButton, IonItem, IonInput, RouterLink]
})
export class LoginPage implements OnInit {

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
    })
  }

  ngOnInit() {
  }

}
