import {Component, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  IonButton,
  IonContent, IonFab, IonFabButton,
  IonFooter,
  IonGrid,
  IonHeader, IonIcon, IonInput, IonItem, IonItemGroup,
  IonLabel, IonList, IonListHeader, IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {arrowForwardOutline, eyeOffOutline, eyeOutline} from "ionicons/icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, ReactiveFormsModule, IonGrid, IonLabel, IonText, IonFooter, IonRow, IonList, IonListHeader, IonItemGroup, IonItem, IonInput, IonIcon, IonFab, IonFabButton, RouterLink]
})
export class SignInPage implements OnInit {
  public type = signal(true);
  public loginFormGroup: FormGroup = new FormGroup({
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
  })

  constructor() {
    addIcons({
      eye: eyeOutline,
      eyeOff: eyeOffOutline,
      arrowForward: arrowForwardOutline,
    })
  }

  ngOnInit() {
  }

  signIn() {
    console.log(this.loginFormGroup.value);
  }
}
