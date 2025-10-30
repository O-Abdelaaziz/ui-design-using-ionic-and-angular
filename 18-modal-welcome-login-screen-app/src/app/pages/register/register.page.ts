import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonButton, IonContent, IonInput, ModalController} from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonButton, IonInput]
})
export class RegisterPage implements OnInit {

  private _modalController = inject(ModalController);

  ngOnInit() {
  }

  register() {

  }

  async dismiss() {
    await this._modalController.dismiss();
  }
}
