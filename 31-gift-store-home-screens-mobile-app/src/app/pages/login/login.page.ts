import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {IonButton, IonContent, IonIcon, IonInput, IonItem} from '@ionic/angular/standalone';
import {
  eyeOffOutline,
  eyeOutline,
  giftOutline,
  lockClosedOutline,
  logoFacebook,
  logoGoogle,
  mailOutline
} from "ionicons/icons";
import {addIcons} from "ionicons";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, ReactiveFormsModule, IonInput, IonIcon, IonButton, RouterLink, IonItem]
})
export class LoginPage implements OnInit {
  private _formBuilder = inject(FormBuilder);
  private _router = inject(Router);
  loginForm: FormGroup;

  constructor() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    addIcons({
      mail: mailOutline,
      lock: lockClosedOutline,
      gift: giftOutline,
      eye: eyeOutline,
      eyeOff: eyeOffOutline,
      google: logoGoogle,
      facebook: logoFacebook,

    });
  }

  ngOnInit() {
  }

  onLogin() {
    console.log(this.loginForm.value);
  }

  navigateToRegister() {
    this._router.navigate(['/register']);

  }
}
