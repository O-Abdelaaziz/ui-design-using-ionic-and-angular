import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonContent,
  IonHeader, IonIcon,
  IonItem,
  IonLabel,
  IonList, IonListHeader,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {addCircle, addCircleOutline} from "ionicons/icons";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonList, IonLabel, IonText, IonIcon, IonListHeader]
})
export class WalletPage implements OnInit {
  transactions: any[] = [];

  constructor() {
    addIcons({
      addCircle: addCircle,
    })
  }

  ngOnInit() {
    this.transactions = [
      {id: 1, amount: 500.00, amount_added: true, date: '05/01/25', purpose: 'JOKAR PASS'},
      {id: 2, amount: 320.50, amount_added: false, date: '04/01/25', purpose: 'ORDER #12340'},
      {id: 3, amount: 300.00, amount_added: true, date: '04/01/25', purpose: 'TOPUP', transaction_id: '128573333'},
      {id: 4, amount: 320.50, amount_added: false, date: '02/01/25', purpose: 'ORDER #12335'},
      {id: 5, amount: 320.50, amount_added: false, date: '02/01/25', purpose: 'ORDER #12330'},
      {id: 6, amount: 500.00, amount_added: true, date: '01/01/25', purpose: 'JOKAR PASS'},
    ];
  }

}
