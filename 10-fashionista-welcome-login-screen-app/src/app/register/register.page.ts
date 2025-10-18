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
import { mailOutline, lockClosedOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
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
export class RegisterPage implements OnInit {

  constructor() {
    addIcons({personOutline,mailOutline,lockClosedOutline});
  }
  
  ngOnInit() {
  }

}
