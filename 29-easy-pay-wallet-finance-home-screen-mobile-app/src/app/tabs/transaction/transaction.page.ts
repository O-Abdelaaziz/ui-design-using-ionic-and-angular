import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader, IonItem, IonItemGroup,
  IonLabel, IonList,
  IonSegment,
  IonSegmentButton, IonText, IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSegment, IonSegmentButton, IonLabel, IonList, IonItemGroup, IonItem, IonThumbnail, IonText]
})
export class TransactionPage implements OnInit {
  public segmentValue: string = 'all';
  public transactions: any[] = [];
  public allTransactions: any[] = [];
  public incomeTransactions: any[] = [];
  public expenseTransactions: any[] = [];
  constructor() { }

  ngOnInit() {
    this.allTransactions=[
      {
        id: 1,
        amount: 100,
        to: 'John Doe',
        date: new Date(),
      },
      {
        id: 2,
        amount: 200,
        to: 'Jane Doe',
        date: new Date(),
      },
      {
        id: 3,
        amount: 300,
        to: 'John Doe',
        date: new Date(),
      },
      {
        id: 4,
        amount: -400,
        to: 'Jane Doe',
        date: new Date(),
      },
      {
        id: 5,
        amount: -500,
        to: 'John Doe',
        date: new Date(),
      },
      {
        id: 6,
        amount: 600,
        to: 'Jane Doe',
        date: new Date(),
      },
    ]
    this.loadTransactions();
  }

  loadTransactions() {
    this.transactions = this.allTransactions;
    this.incomeTransactions = this.allTransactions.filter((transaction: any) => transaction.amount >= 0);
    this.expenseTransactions = this.allTransactions.filter((transaction: any) => transaction.amount < 0);
  }

  filterTransactions() {
    if (this.segmentValue === 'all') {
      this.transactions = this.allTransactions;
    } else if (this.segmentValue === 'income') {
      this.transactions = this.incomeTransactions;
    } else {
      this.transactions = this.expenseTransactions;
    }
  }

  segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
    this.filterTransactions();
  }
}
