import {Component, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonIcon, IonTabBar, IonTabButton, IonTabs} from '@ionic/angular/standalone';
import {
  cart,
  cartOutline,
  fastFood, fastFoodOutline,
  home,
  homeOutline,
  person,
  personOutline,
  search,
  searchOutline
} from "ionicons/icons";
import {addIcons} from "ionicons";
import {Constants} from "../../constants/constants";

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
      fastFood, fastFoodOutline,
      search, searchOutline,
      cart, cartOutline,
      person, personOutline,
    })
  }

  ngOnInit() {
  }

  getCurrentTab(event: { tab: string }) {
    this.currentTab.set(event.tab)
    console.log(event.tab);
  }

  protected readonly Constants = Constants;
}
