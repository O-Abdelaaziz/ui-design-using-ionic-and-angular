import {Component, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonBadge,
  IonContent,
  IonHeader,
  IonIcon, IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {heart, heartOutline, home, homeOutline,location, locationOutline, person, personOutline} from "ionicons/icons";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge]
})
export class TabsPage implements OnInit {
  public selectedTab = signal('home')

  constructor() {
    addIcons({
      'home': home,
      'home-outline': homeOutline,
      'heart': heart,
      'heart-outline': heartOutline,
      'location':location,
      'location-outline': locationOutline,
      'person': person,
      'person-outline': personOutline,
    })
  }

  ngOnInit() {
  }

  onTabChange(event: any) {
    this.selectedTab.set(event.tab);
  }

}
