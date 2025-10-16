import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton, IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem, IonRow, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonItem, IonInput, IonButton, IonText, IonRow, IonCol]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
