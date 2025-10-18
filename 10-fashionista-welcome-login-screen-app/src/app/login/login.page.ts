import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonIcon,
  IonItem,
  IonInput,
  IonLabel,
  IonButton,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    CommonModule,
    FormsModule,
    IonContent,
    IonItem,
    IonIcon,
    IonLabel,
    IonInput,
  ],
})
export class LoginPage implements OnInit {
  constructor() {
    addIcons({ mailOutline, lockClosedOutline });
  }

  ngOnInit() {}
}
