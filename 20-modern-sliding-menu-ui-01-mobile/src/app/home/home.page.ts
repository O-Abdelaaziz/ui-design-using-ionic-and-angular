import {Component} from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton],
})
export class HomePage {
  constructor() {
  }
}
