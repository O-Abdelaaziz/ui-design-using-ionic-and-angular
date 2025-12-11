import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {IonButton, IonCheckbox, IonContent, IonIcon, IonInput, IonItem, IonLabel} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {
  eyeOffOutline,
  eyeOutline,
  giftOutline,
  lockClosedOutline,
  logoFacebook,
  logoGoogle,
  mailOutline,
  personOutline,
  phonePortraitOutline
} from "ionicons/icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, ReactiveFormsModule, IonIcon, IonItem, IonInput, IonButton, IonCheckbox, IonLabel]
})
export class RegisterPage implements OnInit {

  private _formBuilder = inject(FormBuilder);
  private _router = inject(Router);

  registerForm: FormGroup;
  showPassword = false;
  showConfirmPassword = false;

  constructor() {
    this.registerForm = this._formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]]
    }, {
      validators: this.passwordMatchValidator
    });

    addIcons({
      gift: giftOutline,
      mail: mailOutline,
      'person-outline': personOutline,
      'lock-closed-outline': lockClosedOutline,
      'phone-portrait-outline': phonePortraitOutline,
      eye: eyeOutline,
      'eye-off': eyeOffOutline,
      google: logoGoogle,
      facebook: logoFacebook
    });
  }

  ngOnInit() {
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : {passwordMismatch: true};
  }

  onRegister() {
    if (this.registerForm.valid) {
      console.log('Register form submitted', this.registerForm.value);
      // Add your registration logic here
    }
  }

  navigateToLogin() {
    this._router.navigate(['/login']);
  }

  openTerms() {
    // Navigate to terms page or open modal
    console.log('Open Terms & Conditions');
  }

  openPrivacy() {
    // Navigate to privacy policy page or open modal
    console.log('Open Privacy Policy');
  }

}
