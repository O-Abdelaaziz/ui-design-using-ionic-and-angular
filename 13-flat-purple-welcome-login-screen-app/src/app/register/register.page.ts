import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonContent, IonHeader, IonIcon, IonInput, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {chevronForwardOutline} from "ionicons/icons";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonIcon, IonInput]
})
export class RegisterPage implements OnInit {

  constructor() {
    addIcons({
      chevronForwardOutline,
    });
  }

  ngOnInit() {
  }

}
