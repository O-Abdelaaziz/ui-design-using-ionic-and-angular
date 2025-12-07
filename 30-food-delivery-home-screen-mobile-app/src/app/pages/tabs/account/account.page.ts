import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonAvatar,
  IonContent,
  IonHeader, IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {information, power, shareSocial} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonText, IonList, IonAvatar, IonIcon]
})
export class AccountPage implements OnInit {

  options: any[] = [];

  constructor() {
    addIcons({
      shareSocial: shareSocial,
      information: information,
      power: power,
    })
  }

  ngOnInit() {
    this.options = [
      {id: 1, name: 'Saved Addresses', img: 'address.png'},
      {id: 2, name: 'Jokar Pass', img: 'pass.png'},
      {id: 3, name: 'Refer a friend', icon: 'share-social', color: 'primary'},
      {id: 4, name: 'Support', img: 'life-guard.png'},
      {id: 5, name: 'About', icon: 'information'},
      {id: 6, name: 'Logout', icon: 'power', color: 'danger'},
    ];
  }

}
