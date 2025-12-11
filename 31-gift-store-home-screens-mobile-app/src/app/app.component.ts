import {Component} from '@angular/core';
import {
  IonApp,
  IonAvatar,
  IonBadge,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {
  add,
  arrowBackOutline,
  bagHandle,
  bagHandleOutline,
  bagHandleSharp,
  bagOutline,
  cardOutline,
  documentLockOutline,
  documentLockSharp,
  heartOutline,
  homeOutline,
  homeSharp,
  informationCircleOutline,
  informationCircleSharp,
  keyOutline,
  keySharp,
  locationOutline,
  locationSharp,
  logOutOutline,
  logOutSharp,
  notificationsOutline,
  personOutline,
  personSharp,
  remove,
  settingsOutline,
  star,
  ticketOutline,
  trashOutline,
} from 'ionicons/icons';
import {NgClass} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonApp, IonRouterOutlet, IonMenu, IonContent, IonLabel, IonIcon, IonItem, IonHeader, IonAvatar, IonMenuToggle, NgClass, IonBadge, IonButton],
})
export class AppComponent {
  profile = {
    name: 'Ouakala Abdelaaziz',
    email: 'aadenfr@gmail.com',
  };

  pages = [
    {title: 'Home', url: '/home', icon: 'home', active: true},
    {title: 'Profile', url: '/profile', icon: 'person', active: false},
    {title: 'Orders', url: '/orders', icon: 'bag-handle', active: false},
    {title: 'Addresses', url: '/addresses', icon: 'location', active: false},
    {
      title: 'Change Password',
      url: '/change-password',
      icon: 'key',
      active: false,
    },
    {
      title: 'About Us',
      url: '/about',
      icon: 'information-circle',
      active: false,
    },
    {
      title: 'Privacy Policy',
      url: '/privacy',
      icon: 'document-lock',
      active: false,
    },
    {title: 'Sign Out', icon: 'log-out', route: true, active: false},
  ];

  mainPages = [
    {title: 'Home', icon: 'home-outline', active: true, url: '/home'},
    {title: 'Orders', icon: 'bag-outline', active: false, url: '/orders', badge: 3},
    {title: 'Favorites', icon: 'heart-outline', active: false, url: '/favorites'},
    {title: 'Notifications', icon: 'notifications-outline', active: false, url: '/notifications', badge: 3}
  ];

  accountPages = [
    {title: 'Profile', icon: 'person-outline', active: false, url: '/profile'},
    {title: 'Addresses', icon: 'location-outline', active: false, url: '/addresses'},
    {title: 'Payment Methods', icon: 'card-outline', active: false, url: '/payments'},
    {title: 'Settings', icon: 'settings-outline', active: false, url: '/settings'}
  ];

  constructor() {
    addIcons({
      star,
      bagHandleOutline,
      bagHandle,
      bagHandleSharp,
      trashOutline,
      add,
      remove,
      arrowBackOutline,
      ticketOutline,
      locationOutline,
      homeOutline,
      homeSharp,
      informationCircleOutline,
      informationCircleSharp,
      documentLockOutline,
      documentLockSharp,
      logOutOutline,
      logOutSharp,
      personOutline,
      personSharp,
      locationSharp,
      keyOutline,
      keySharp,
      heartOutline,
      notificationsOutline,
      cardOutline,
      settingsOutline,
      bagOutline,
    });
  }

  onItemTap(page: any) {
    if (!page?.active) {
      const index = this.pages.findIndex(x => x.active);
      this.pages[index].active = false;
      page.active = true;
    }

    if (page?.route) {
      // navigate
    } else {
      this.logout();
    }
  }

  logout() {
  }
}
