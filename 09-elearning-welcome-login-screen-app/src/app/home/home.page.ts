import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
import { mailOutline, lockClosedOutline, lockOpenOutline } from 'ionicons/icons';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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
export class HomePage {
  form!: FormGroup;
  isTypePassword: boolean = true;

  constructor() {
    addIcons({
      mail: mailOutline,
      lockClosedOutline: lockClosedOutline,
      lockOpenOutline: lockOpenOutline,
    });

    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
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
    if (!this.form.valid) return;
    console.log(this.form.value);
  }
}
