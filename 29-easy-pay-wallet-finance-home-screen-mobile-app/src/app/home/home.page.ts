import {Component} from '@angular/core';
import {
  IonAvatar,
  IonButton, IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonNote,
  IonRow,
  IonText,
  IonThumbnail, IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {addOutline, cashOutline, menuOutline, walletOutline} from "ionicons/icons";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonContent, IonItem, IonButton, IonIcon, IonAvatar, IonGrid, IonRow, IonCol, IonLabel, IonNote, IonChip, IonText, IonCard, IonCardHeader, IonCardContent, IonThumbnail, IonList, IonListHeader, CurrencyPipe, IonToolbar, IonButtons],
})
export class HomePage {

  features: any[] = [
    {id: 1, name: 'Top Up', src: 'assets/images/top-up.png', background: 'rgba(27,150,181, 0.1)', page: ''},
    {id: 2, name: 'Withdraw', src: 'assets/images/cash-withdrawal.png', background: 'rgba(106,100,255, 0.1)', page: ''},
    {id: 3, name: 'Send', src: 'assets/images/send.png', background: 'rgba(255, 196, 9, 0.1)', page: ''},
    {id: 4, name: 'Pay', src: 'assets/images/debit-card.png', background: 'rgba(27,150,181, 0.1)', page: ''},
  ];

  transactions: any[] = [
    {id: 1, vendor: 'Received from PhonePe', image: '', amount: 1500, time: '3:00PM'},
    {id: 2, vendor: 'Flatirons', image: '', amount: -1200, time: '4:00PM'}
  ];

  constructor() {
    addIcons({
      menu: menuOutline,
      wallet: walletOutline,
      cash: cashOutline,
      add: addOutline,

    })
  }
}
