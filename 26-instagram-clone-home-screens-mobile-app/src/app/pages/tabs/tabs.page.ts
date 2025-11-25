import {Component, OnInit, Signal, signal, ViewChild, viewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonBadge,
  IonContent, IonFab, IonFabButton,
  IonHeader,
  IonIcon, IonLabel,
  IonTab, IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {
  heart, heartOutline,
  home,
  homeOutline,
  person,
  personOutline,
  search,
  searchOutline,
  videocam,
  videocamOutline
} from "ionicons/icons";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonTabs, IonTabButton, IonIcon, IonLabel, IonTabBar, IonFab, IonFabButton, IonBadge]
})
export class TabsPage implements OnInit {
  public activeTab = signal<string | undefined>('');
  // @ViewChild('tabs') tabs!: IonTabs;
  public tabs = viewChild<IonTabs>('tabs');
  public tabsList = [
    {id: 'home', label: 'Home', icon: 'home', outlineIcon: 'home-outline', component: 'home'},
    {id: 'search', label: 'Search', icon: 'search', outlineIcon: 'search-outline', component: 'search'},
    {id: 'reels', label: 'Reels', icon: 'reels', outlineIcon: 'reels-outline', component: 'reels'},
    {id: 'wishlist', label: 'Wish List', icon: 'heart', outlineIcon: 'heart-outline', component: 'wish-list'},
    {id: 'profile', label: 'Profile', icon: 'person', outlineIcon: 'person-outline', component: 'profile'},
  ];
  activeTabIcon = signal<string | null>(null);

  isHide = signal(false);

  constructor() {
    addIcons({
      'home-outline': homeOutline,
      home: home,
      'search-outline': searchOutline,
      search: search,
      'reels-outline': videocamOutline,
      reels: videocam,
      'person-outline': personOutline,
      person: person,
      'heart-outline': heartOutline,
      heart: heart,
    })
  }

  ngOnInit() {
    this.isHide.set(true);
    setTimeout(() => {
      this.isHide.set(false);
    }, 500);
  }

  ionViewWillEnter() {
    const selectedTab = this.tabs()?.getSelected();
    if (selectedTab) {
      this.activeTab.set(selectedTab);
    }
  }

  setActiveTab($event: any) {
    this.isHide.set(true);
    this.activeTab.set($event.tab);
    setTimeout(() => {
      this.isHide.set(false);
    }, 100);
  }

  getActiveTabIcon() {
    switch (this.activeTab()) {
      case 'home':
        return 'home';
      case 'search':
        return 'search';
      case 'reels':
        return 'reels';
      case 'wishlist':
        return 'heart';
      case 'profile':
        return 'person';
    }
    return 'home';
  }
}
