import {Component, inject, OnInit, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonButton, IonContent, IonIcon, ModalController} from '@ionic/angular/standalone';
import type {Mode} from "@ionic/core";
import {LoginPage} from "../login/login.page";
import {RegisterPage} from "../register/register.page";
import {addIcons} from "ionicons";
import {happyOutline} from "ionicons/icons";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonButton, IonIcon]
})
export class WelcomePage implements OnInit {
  private _modalController = inject(ModalController);

  constructor() {
    addIcons({
      'happy-outline': happyOutline,
    })
  }
  ngOnInit() {
  }

  async register() {
    await this.openModal(RegisterPage, 'md', 'register-modal');
  }

  async login() {
    await this.openModal(LoginPage, 'md', 'login-modal');
  }

  private async openModal(page: Type<any>, mode: Mode, cssClass?: string) {
    const modal = await this._modalController.create({
      component: page,
      animated: true,
      mode: mode,
      backdropDismiss: false,
      showBackdrop: true,
      cssClass: cssClass,
    });
    return await modal.present();
  }
}
