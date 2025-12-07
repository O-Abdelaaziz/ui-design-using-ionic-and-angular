import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar, IonButton,
  IonContent,
  IonHeader, IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonTitle, IonToggle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {fingerPrintOutline, helpBuoyOutline, keyOutline, logOutOutline, notificationsOutline} from "ionicons/icons";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonAvatar, IonLabel, IonList, IonItem, IonIcon, IonToggle, IonButton]
})
export class SettingsPage implements OnInit {

  constructor() {
    addIcons({
      'log-out': logOutOutline,
      'notifications': notificationsOutline,
      'finger-print': fingerPrintOutline,
      'key': keyOutline,
      'help-buoy': helpBuoyOutline,
    })
  }

  ngOnInit() {
  }

}
