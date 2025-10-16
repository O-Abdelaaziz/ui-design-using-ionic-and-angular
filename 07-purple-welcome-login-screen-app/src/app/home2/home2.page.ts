import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput, IonItem,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {lockClosedOutline, logoFacebook, logoInstagram, logoLinkedin, logoTwitter, mailOutline} from "ionicons/icons";

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, FormsModule, IonButton, IonIcon, IonInput, IonItem]
})
export class Home2Page implements OnInit {

  constructor() {
    addIcons({
      'logo-facebook': logoFacebook,
      'logo-twitter': logoTwitter,
      'logo-instagram': logoInstagram,
      'logo-linkedin': logoLinkedin,
      'lock': lockClosedOutline,
      'mail': mailOutline,

    })
  }

  ngOnInit() {
  }

}
