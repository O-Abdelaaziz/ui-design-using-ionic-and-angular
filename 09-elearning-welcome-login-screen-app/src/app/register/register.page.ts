import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonLabel,
  IonText,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonCheckbox,
  IonNote,
  IonCol,
  IonRow,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  mailOutline,
  lockClosedOutline,
  lockOpenOutline,
  arrowBackOutline,
  personOutline,
} from 'ionicons/icons';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonRow,
    IonCol,
    IonNote,
    IonCheckbox,
    IonIcon,
    IonButton,
    IonInput,
    IonList,
    IonLabel,
    IonContent,
    IonText,
    IonItem,
  ],
})
export class RegisterPage implements OnInit {
  signupForm!: FormGroup;
  isTypePassword: boolean = true;

  constructor() {
    this.initForm();
    addIcons({
      arrowBackOutline,
      personOutline,
      mailOutline,
      lockClosedOutline,
      lockOpenOutline,
    });
  }

  ngOnInit() {}

  initForm() {
    this.signupForm = new FormGroup({
      username: new FormControl('', { validators: [Validators.required] }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)],
      }),
    });
  }

  onChange() {
    this.isTypePassword = !this.isTypePassword;
  }

  onSubmit() {
    if (!this.signupForm.valid) return;
    console.log(this.signupForm.value);
  }
}
