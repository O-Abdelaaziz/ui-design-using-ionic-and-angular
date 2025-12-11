import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonAvatar,
  IonBackButton, IonButton,
  IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonCol,
  IonContent, IonFabButton, IonFooter,
  IonHeader, IonIcon,
  IonItem, IonLabel, IonList, IonListHeader, IonRow, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {ActivatedRoute} from "@angular/router";
import {Event} from "../../shared/models/event.model";
import {events} from "../../shared/seeds/events.seed";
import {addIcons} from "ionicons";
import {
  arrowBack,
  arrowForwardOutline,
  calendarOutline,
  heartOutline,
  locationOutline, navigate, notificationsOutline,
  pricetagOutline, shareSocial,
  ticketOutline
} from "ionicons/icons";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonItem, IonRow, IonLabel, IonCard, IonList, IonListHeader, IonCol, IonAvatar, IonText, IonFooter, IonButton, IonFabButton, IonIcon, IonCardHeader, IonCardTitle, IonCardContent, IonChip]
})
export class EventDetailsPage implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);
  public event: Event | undefined;

  constructor() {
    addIcons({
      'calendar-outline': calendarOutline,
      'location-outline': locationOutline,
      'heart-outline': heartOutline,
      'ticket-outline': ticketOutline,
      'arrow-forward': arrowForwardOutline,
      'arrow-back': arrowBack,
      'pricetag-outline': pricetagOutline,
      'notifications-outline': notificationsOutline,
      navigate: navigate,
      'share-social': shareSocial,
    })
  }

  ngOnInit() {
    const eventId = this._activatedRoute.snapshot.paramMap.get('id');
    this.event = events.find(event => event.id === eventId);
  }

}
