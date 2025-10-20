import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  triangle,
  ellipse,
  square,
  informationCircle,
  newspaper,
  statsChart,
  home,
  homeSharp,
  statsChartSharp, newspaperSharp, informationCircleSharp
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  standalone: true,
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({
      homeSharp: homeSharp,
      statsChartSharp: statsChartSharp,
      newspaperSharp: newspaperSharp,
      informationCircleSharp: informationCircleSharp,
    });
  }
}
