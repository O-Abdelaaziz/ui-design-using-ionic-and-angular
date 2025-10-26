import {Component} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonButton,
  IonIcon,
  IonLabel,
  IonRow,
  IonCol,
  IonSearchbar,
  IonAvatar,
  IonCard,
  IonCardHeader,
  IonBadge,
  IonCardSubtitle,
  IonCardContent,
  IonImg, IonCardTitle
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {
  chevronForwardCircleOutline,
  ellipsisHorizontalOutline,
  locationOutline,
  menuOutline,
  optionsOutline,
  starOutline
} from "ionicons/icons";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [RouterModule, IonHeader, IonContent, IonItem, IonButton, IonIcon, IonLabel, IonRow, IonCol, IonSearchbar, IonAvatar, IonCard, IonCardHeader, IonBadge, IonCardSubtitle, IonCardContent, IonImg, IonCardTitle],
})
export class HomePage {
  constructor() {
    addIcons({
      'menu': menuOutline,
      'options-outline': optionsOutline,
      'location-outline': locationOutline,
      'star': starOutline,
      'ellipsis-horizontal': ellipsisHorizontalOutline,
      'chevron-forward-circle-outline': chevronForwardCircleOutline,
    })
  }
}
