import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {chatboxEllipsesOutline, heartOutline, homeOutline, personOutline} from "ionicons/icons";
import {Constants} from "../constans/constants";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel]
})
export class TabsPage implements OnInit {
  constructor() {
    this.addIonicIcons();
  }

  ngOnInit() {
  }

  private addIonicIcons() {
   addIcons({
    homeOutline: homeOutline,
    heartOutline: heartOutline,
    chatboxEllipsesOutline: chatboxEllipsesOutline,
    personOutline: personOutline,
   })
  }

  protected readonly Constants = Constants;
}
