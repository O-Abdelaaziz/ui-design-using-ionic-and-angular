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
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButton, IonButtons, IonIcon, IonInput, IonText, RouterLink]
})
export class RegisterPage implements OnInit {

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
