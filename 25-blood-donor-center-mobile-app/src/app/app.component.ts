import {Component} from '@angular/core';
import {
  IonApp, IonAvatar,
  IonButtons,
  IonContent, IonFooter,
  IonHeader, IonIcon, IonItem, IonLabel, IonList,
  IonMenu, IonMenuButton, IonMenuToggle,
  IonRouterOutlet, IonSplitPane, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {callOutline, logoWhatsapp, mailOutline} from "ionicons/icons";
import {RouterLink, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [CommonModule, RouterModule, IonApp, IonRouterOutlet, IonMenu, IonToolbar, IonContent, IonSplitPane, IonList, IonAvatar, IonLabel, IonText, IonIcon, IonMenuToggle, IonItem, IonFooter],
})
export class AppComponent {
  constructor() {
    addIcons({
      call: callOutline,
      mail: mailOutline,
      whatsapp: logoWhatsapp,

    })
  }

  public pages: any[] = [
    {title: 'Home', url: '/home', icon: 'home'},
    {title: 'Profile', url: '/profile', icon: 'person'},
    {title: 'About Us', url: '/about', icon: 'information-circle'},
    {title: 'Privacy Policy', url: '/privacy', icon: 'document-lock'},
    {title: 'Sign Out', url: '', icon: 'log-out', route: true},
  ];


  signOut() {
    console.log('signout');
  }
}
