import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {bagOutline, homeOutline, menuOutline, personOutline, searchOutline, walletOutline} from "ionicons/icons";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel]
})
export class TabsPage implements OnInit {

  constructor() {
    addIcons({
      home: homeOutline,
      search: searchOutline,
      bag: bagOutline,
      wallet: walletOutline,
      account: personOutline,
      menu: menuOutline,
    })
  }

  ngOnInit() {
  }

}
