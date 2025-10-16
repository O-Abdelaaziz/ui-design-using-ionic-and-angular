import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonInput, IonInputPasswordToggle,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonText
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {closeOutline, eyeOutline, lockClosedOutline, logInOutline, mailOutline} from "ionicons/icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonFab, IonFabButton, IonIcon, IonList, IonListHeader, IonLabel, IonInput, IonItem, IonButton, IonText, IonInputPasswordToggle]
})
export class LoginPage implements OnInit {

  constructor(private router: Router) {
    addIcons({
      close: closeOutline,
      mail: mailOutline,
      lock: lockClosedOutline,
      eye: eyeOutline,
      login: logInOutline,
    })
  }

  ngOnInit() {
  }

  onClose() {
    this.router.navigate(['/home']);
  }
}
