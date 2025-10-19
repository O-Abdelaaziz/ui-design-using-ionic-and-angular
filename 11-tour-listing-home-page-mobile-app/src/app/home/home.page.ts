import {Component} from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonIcon, IonInput} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {briefcase, search, airplane, business, camera, bus, locationOutline, star} from "ionicons/icons";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonContent, IonAvatar, IonIcon, IonInput, NgStyle],
})
export class HomePage {
  packages: any[] = [
    {
      place: 'Water Villa',
      price: 120,
      image: 'assets/images/package1.webp',
      rating: 4.5,
      reviews: 120,
      location: 'Maldives',
      description: 'A beautiful villa with a private pool and a stunning view of the ocean.',
    },
    {
      place: 'Times square',
      price: 180,
      image: 'assets/images/package2.webp',
      rating: 4.8,
      reviews: 200,
      location: 'New York',
      description: 'A beautiful villa with a private pool and a stunning view of the ocean.',
    },
    {
      place: 'Beach house',
      price: 250,
      image: 'assets/images/package3.webp',
      rating: 4.7,
      reviews: 150,
      location: 'Bali',
      description: 'A beautiful villa with a private pool and a stunning view of the ocean.',
    }
  ]

  constructor() {
    addIcons({
      briefcase,
      search,
      airplane,
      business,
      camera,
      bus,
      locationOutline,
      star

    })

  }
}
