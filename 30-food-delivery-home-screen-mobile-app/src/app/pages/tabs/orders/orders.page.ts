import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons, IonCol,
  IonContent,
  IonHeader,
  IonIcon, IonItem, IonLabel,
  IonList, IonListHeader, IonRow, IonText, IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {checkmarkCircle, search, time} from "ionicons/icons";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, IonList, IonListHeader, IonItem, IonThumbnail, IonLabel, IonText, IonRow, IonCol]
})
export class OrdersPage implements OnInit {

  constructor() {
    addIcons({
      checkmarkCircle: checkmarkCircle,
      search: search,

    })
  }

  ngOnInit() {
  }

}
