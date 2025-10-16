import {Component} from '@angular/core';
import {IonButton, IonContent, IonLabel, IonList, IonListHeader, IonText} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonList, IonListHeader, IonButton, IonText, IonLabel, RouterLink],
})
export class HomePage {
  constructor() {
  }
}
