import {Component} from '@angular/core';
import {
  IonApp, IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonIcon, IonItem, IonLabel, IonList,
  IonMenu, IonMenuButton,
  IonRouterOutlet,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {
  addOutline,
  browsersOutline,
  chatbubblesOutline,
  exitOutline,
  flash,
  heartOutline,
  pieChartOutline
} from "ionicons/icons";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonMenu, IonContent, IonLabel, IonButton, IonIcon, IonList, IonItem],
})
export class AppComponent {
  constructor() {
    addIcons({
      'add': addOutline,
      'pie-chart-outline': pieChartOutline,
      'browser-outline': browsersOutline,
      'flash-outline': flash,
      'chatbubble-ellipses-outline': chatbubblesOutline,
      'heart-outline': heartOutline,
      'exit-outline': exitOutline,
    })
  }
}
