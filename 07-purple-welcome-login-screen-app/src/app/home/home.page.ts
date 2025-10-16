import {Component} from '@angular/core';
import {IonButton, IonCol, IonContent, IonIcon, IonInput, IonItem, IonRow, IonText} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {logoFacebook, logoGoogle, personCircleOutline} from "ionicons/icons";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonItem, IonIcon, IonInput, IonButton, IonText, IonRow, IonCol],
})
export class HomePage {
  constructor() {
    addIcons({
      personCircleOutline: personCircleOutline,
      logoFacebook: logoFacebook,
      logoGoogle: logoGoogle,
    })
  }
}
