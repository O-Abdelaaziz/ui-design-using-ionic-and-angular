import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonIcon, IonInput, IonItem, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {lockClosedOutline, mailOutline, personOutline} from "ionicons/icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonBackButton, IonIcon, IonInput, IonText, RouterLink]
})
export class LoginPage implements OnInit {

  constructor() {
    addIcons({
      'person-outline': personOutline,
      'mail-outline': mailOutline,
      'lock-closed-outline': lockClosedOutline,
    })
  }

  ngOnInit() {
  }

}
