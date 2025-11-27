import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonItemGroup,
  IonLabel,
  IonList,
  IonListHeader,
  IonRow,
  IonText,
  IonToolbar
} from '@ionic/angular/standalone';
import {Router, RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {key, logoFacebook, logoGoogle, logoLinkedin, logoTwitter, mail} from "ionicons/icons";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonButton, IonCol, IonGrid, IonImg, IonLabel, IonRow, IonText, IonFooter, IonList, IonListHeader, IonItemGroup, IonItem, IonInput, RouterLink, IonIcon]
})
export class SignInPage implements OnInit {

  private _router = inject(Router);

  form!: FormGroup;

  constructor() {
    addIcons({
      'logo-google': logoGoogle,
      'logo-facebook': logoFacebook,
      'logo-twitter': logoTwitter,
      'logo-linkedin': logoLinkedin,
      'mail': mail,
      'key': key,
    })
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]}),
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
    this._router.navigate(['/tabs/home']);
  }
}
