import {Component} from '@angular/core';
import {
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonItem,
  IonRow,
  IonSelect,
  IonSelectOption
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {call, chatbubble, menu, notifications} from "ionicons/icons";


@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonContent, IonRow, IonCol, IonIcon, IonSelect, IonSelectOption, IonButton, IonItem],
})
export class Tab1Page {
  customInterfaceOptions = {};

  constructor() {
    addIcons({
      menu: menu,
      bell: notifications,
      call: call,
      sms: chatbubble,
    })
  }
}
