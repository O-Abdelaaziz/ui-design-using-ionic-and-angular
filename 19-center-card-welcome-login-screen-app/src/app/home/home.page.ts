import {Component} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonCard,
  IonCardContent,
  IonButton
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {arrowBackOutline, logoFacebook, logoGoogle, logoInstagram, logoLinkedin, logoTwitter} from "ionicons/icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonIcon, IonCard, IonCardContent, IonButton, RouterLink],
})
export class HomePage {
  constructor() {
    addIcons({
      'arrow-back': arrowBackOutline,
      'logo-facebook': logoFacebook,
      'logo-google': logoGoogle,
      'logo-twitter': logoTwitter,
      'logo-linkedin': logoLinkedin,
      'logo-instagram': logoInstagram,
    })
  }
}
