import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonListHeader, IonItem, IonIcon, IonInput, IonRow, IonCol, IonNote, IonButton, IonText, IonFooter } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline, checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule,IonFooter, IonText, IonButton, IonNote, IonCol, IonRow, IonInput, IonIcon, IonItem, IonListHeader, IonList, IonLabel, IonToolbar, IonContent],
})
export class HomePage {
   staySignedIn: boolean = true;

  constructor() {
    addIcons({
        mailOutline,
        lockClosedOutline,
        checkmarkCircleOutline,
        closeCircleOutline
    })
  }

  changeStatus(value:any) {
    this.staySignedIn = value;
  }

}
