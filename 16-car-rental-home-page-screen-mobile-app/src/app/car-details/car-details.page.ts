import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonBackButton, IonBadge, IonButton,
  IonButtons,
  IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol,
  IonContent, IonDatetime,
  IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {
  calendarOutline,
  chevronForwardOutline,
  locationOutline,
  personOutline,
  snow,
  speedometerOutline,
  starOutline
} from "ionicons/icons";
import {addIcons} from "ionicons";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
  standalone: true,
  imports: [RouterModule, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonCard, IonImg, IonCardContent, IonRow, IonCol, IonCardTitle, IonCardSubtitle, IonIcon, IonButton, IonItem, IonDatetime, IonLabel, IonInput, IonBadge]
})
export class CarDetailsPage implements OnInit {

  constructor() {
    addIcons({
      'speedometer-outline': speedometerOutline,
      'snow': snow,
      'person-outline': personOutline,
      'calendar-outline': calendarOutline,
      'location-outline': locationOutline,
      'star': starOutline,
      'chevron-forward': chevronForwardOutline,
    });
  }

  ngOnInit() {
  }

}
