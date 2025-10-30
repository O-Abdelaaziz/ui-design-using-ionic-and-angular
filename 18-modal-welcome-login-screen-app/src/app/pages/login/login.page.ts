import {Component, inject, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonTitle, IonToast,
  IonToolbar,
  ModalController
} from '@ionic/angular/standalone';
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonInput, IonButton]
})
export class LoginPage implements OnInit {
  private _modalController = inject(ModalController);
  private _toastController = inject(ToastController);

  isToastOpen = signal(false);


  constructor() {
  }

  ngOnInit() {
  }

  async dismiss() {
    await this._modalController.dismiss();
  }

  async login() {
    // this.setOpen(true);
    await this.presentToast('bottom');
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen.set(isOpen);
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this._toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}
