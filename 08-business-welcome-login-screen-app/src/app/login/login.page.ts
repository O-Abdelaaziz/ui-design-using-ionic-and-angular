import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonButton, IonCol, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonNote, IonRow, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline, closeCircleOutline, lockClosedOutline, mailOutline } from 'ionicons/icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, IonText, IonButton, IonNote, IonCol, IonRow, IonInput, IonIcon, IonItem, IonListHeader, IonList, IonLabel, IonContent],
})
export class LoginPage implements OnInit {

   staySignedIn: boolean = true;

  constructor() {
    addIcons({mailOutline,lockClosedOutline,checkmarkCircleOutline,closeCircleOutline});
  }

  changeStatus(value:any) {
    this.staySignedIn = value;
  }

  ngOnInit() {}
}
