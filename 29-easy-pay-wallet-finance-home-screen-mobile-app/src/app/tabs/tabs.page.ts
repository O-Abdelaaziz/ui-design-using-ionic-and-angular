import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonIcon, IonTabBar, IonTabButton, IonTabs} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {
  card,
  cardOutline,
  home,
  homeOutline,
  pieChart,
  pieChartOutline,
  settings,
  settingsOutline
} from "ionicons/icons";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonIcon, IonTabBar, IonTabButton, IonTabs]
})
export class TabsPage implements OnInit {

  @ViewChild('tabs', {static: false}) tabs!: IonTabs;
  selectedTab: any;

  constructor() {
    addIcons({
      homeOutline: homeOutline,
      home:home,
      pieChartOutline: pieChartOutline,
      pieChart: pieChart,
      cardOutline: cardOutline,
      card:card,
      settingsOutline: settingsOutline,
      settings:settings,
    })
  }

  ngOnInit() {
  }

  setCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
    console.log(this.selectedTab);
  }

}
