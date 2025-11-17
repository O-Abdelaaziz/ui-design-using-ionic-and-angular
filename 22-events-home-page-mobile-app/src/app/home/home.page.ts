import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonItem,
  IonIcon, IonInput, IonCol, IonCard, IonCardHeader, IonCardContent
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {eye, heart, location, searchOutline} from "ionicons/icons";
import {register} from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonItem, IonIcon, IonInput, IonCol, IonCard, IonCardHeader, IonCardContent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  constructor() {
    addIcons({
      searchOutline,
      location,
      heart,
      eye
    })
  }
}
