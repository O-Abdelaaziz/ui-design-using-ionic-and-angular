import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon, IonInput,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {chevronForwardOutline} from "ionicons/icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonIcon, IonInput]
})
export class LoginPage implements OnInit {

  constructor() {
    addIcons({
      chevronForwardOutline,
    });
  }

  ngOnInit() {
  }

}
