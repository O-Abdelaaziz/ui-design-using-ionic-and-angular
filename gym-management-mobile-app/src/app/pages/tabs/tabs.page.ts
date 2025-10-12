import {Component, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {
  calendar,
  calendarOutline,
  home,
  homeOutline,
  people,
  peopleOutline,
  person,
  personOutline
} from "ionicons/icons";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel]
})
export class TabsPage implements OnInit {
  public currentTab = signal('home');

  constructor() {
    addIcons({home, homeOutline, people, peopleOutline, calendar, calendarOutline, person, personOutline})
  }

  ngOnInit() {
  }

  getCurrentTab(event: { tab: string }) {
    this.currentTab.set(event.tab)
    console.log(event.tab);
  }
}
