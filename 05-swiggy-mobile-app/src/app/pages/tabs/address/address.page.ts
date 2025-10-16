import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonBackButton, IonButton, IonButtons,
  IonContent, IonFooter,
  IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup,
  IonLabel, IonList, IonRow,
  IonSpinner, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {briefcaseOutline, homeOutline, locationOutline} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonBackButton, IonSpinner, IonList, IonItemDivider, IonItemGroup, IonItem, IonIcon, IonText, IonRow, IonButton, IonFooter, IonButtons]
})
export class AddressPage implements OnInit {

  isLoading: boolean;
  addresses: any[] = [];

  constructor() {
    addIcons({
      homeOutline,
      briefcaseOutline,
      locationOutline,
    })
  }

  ngOnInit() {
    this.getAddresses();
  }

  getAddresses() {
    this.isLoading = true;
    setTimeout(() => {
      this.addresses = [
        {
          address: "Fancy Bazaar, India",
          house: "2nd Floor",
          id: "7Kox63KlggTvV7ebRKar",
          landmark: "Fancy Bazar",
          lat: 26.1830738,
          lng: 91.74049769999999,
          title: "Fancy",
          user_id: "1"
        },
        {
          address: "Kanuat palace, India",
          house: "Ground Floor",
          id: "8Kox63KlggTvV7ebRKar",
          landmark: "Bazar",
          lat: 26.1830738,
          lng: 91.74049769999999,
          title: "Work",
          user_id: "1"
        }
      ];
      this.isLoading = false;
    }, 3000);
  }

  getIcon(title) {
    const name = title.toLowerCase();
    switch (name) {
      case 'home':
        return 'home-outline';
      case 'work':
        return 'briefcase-outline';
      default:
        return 'location-outline';
    }
  }

  editAddress(address) {
  }

  deleteAddress(address) {
  }

}
