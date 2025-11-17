import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonIcon, IonInput,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar, NavController
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import {MenuStateService} from "../../../shared/services/menu-state.service";
import {addIcons} from "ionicons";
import {eye} from "ionicons/icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, RouterLink, IonItem, IonLabel, IonInput, IonIcon]
})
export class LoginPage implements OnInit {
  private _menuStateService = inject(MenuStateService);
  private _navController = inject(NavController);

  constructor() {
    addIcons({
      eye,
    })
  }

  ngOnInit() {
  }

  login() {
    this._menuStateService.setMenuState(true);
    this._navController.navigateRoot('/home', {animationDirection: 'forward'});
  }
}
