import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonAvatar,
  IonBackButton, IonButton,
  IonButtons, IonCol,
  IonContent, IonGrid,
  IonHeader, IonIcon, IonItem, IonLabel, IonList,
  IonMenuButton, IonRow, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Router} from "@angular/router";
import {addIcons} from "ionicons";
import {trophyOutline, waterOutline} from "ionicons/icons";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonBackButton, IonButton, IonGrid, IonAvatar, IonRow, IonCol, IonItem, IonIcon, IonLabel, IonList, IonText]
})
export class ProfilePage implements OnInit {

  back: boolean = false;

  constructor(public router: Router) {
    addIcons({
      water: waterOutline,
      trophy: trophyOutline,
    })
  }

  ngOnInit() {
    const data = this.router.url.split('/');
    console.log(data);
    this.back = data[1] == 'home';
  }

}
