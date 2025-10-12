import {Component, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonIcon, IonTabBar, IonTabButton, IonTabs} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {
  add,
  addOutline,
  chatbubble, chatbubbleOutline,
  home,
  homeOutline, menuOutline, notificationsOutline,
  person,
  personOutline,
  search,
  searchOutline
} from "ionicons/icons";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonTabs, IonTabBar, IonTabButton, IonIcon]
})
export class TabsPage implements OnInit {
  public currentTab = signal('home');

  constructor() {
    addIcons({
      menuOutline,
      notificationsOutline,
      home, homeOutline,
      search, searchOutline,
      add, addOutline,
      chatbubble, chatbubbleOutline,
      person, personOutline,
    })
  }

  ngOnInit() {
  }

  getCurrentTab(event: { tab: string }) {
    this.currentTab.set(event.tab)
    console.log(event.tab);
  }
}
