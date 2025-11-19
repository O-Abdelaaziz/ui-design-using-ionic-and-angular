import {Component, inject, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonFooter,
  IonGrid,
  IonHeader, IonIcon, IonInput, IonItem, IonItemGroup, IonLabel, IonList, IonListHeader, IonRow, IonText,
  IonTitle,
  IonToolbar, ModalController, ToastController
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {arrowForwardOutline, eyeOffOutline, eyeOutline} from "ionicons/icons";
import {OtpComponent} from "../otp/otp.component";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonFab, IonFabButton, IonFooter, IonGrid, IonIcon, IonInput, IonItem, IonItemGroup, IonLabel, IonList, IonListHeader, IonRow, IonText, ReactiveFormsModule, RouterLink, IonButton]
})
export class SignUpPage implements OnInit {
  private _modalController = inject(ModalController);
  private _toastController = inject(ToastController);

  public type = signal(true);
  public verified = false;
  public verifiedNumber: any;

  public registerFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    confirmPassword: new FormControl('', [Validators.required]),
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

  signUp() {
    console.log(this.registerFormGroup.value);
  }

  async sendOtp() {
    console.log(this.registerFormGroup.value);
    const phoneNumber = this.registerFormGroup.value.phone;
    if (phoneNumber && phoneNumber?.length == 10) {
      const modal = await this._modalController.create({
        component: OtpComponent,
        componentProps: {
          phone: this.registerFormGroup.value.phone
        }
      });
      await modal.present();
      const {data} = await modal.onDidDismiss();
      console.log(data);
      if (data) {
        // this.registerFormGroup.patchValue({
        //   phone: data.phone
        // })
        console.log('otp: ', data);
        this.verified = true;
        this.verifiedNumber = phoneNumber;
      }
    } else {
      this._toastController.create({
        message: 'Phone number is required',
        duration: 2000,
        position: 'top',
        color: 'danger'
      }).then(toast => toast.present());

      // const toast = await this._toastController.create({
      //   message: 'Please enter proper Phone Number',
      //   duration: 5000,
      //   color: "danger"
      // });
      // toast.present();
    }
  }

  changeNumber(event: any) {
    const phoneNumber = this.registerFormGroup.value.phone;
    if (phoneNumber && phoneNumber?.length == 10) {
      // if condition
      // if (this.verifiedNumber && phoneNumber == this.verifiedNumber) {
      //   this.verified = true;
      // } else {
      //   this.verified = false;
      // }

      //if simplified
      this.verified = !!(this.verifiedNumber && phoneNumber == this.verifiedNumber);
    }
  }
}
