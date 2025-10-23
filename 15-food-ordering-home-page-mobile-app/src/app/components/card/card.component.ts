import {Component, input, OnInit} from '@angular/core';
import {IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonIcon, IonImg} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {locationOutline, star, starOutline, time} from "ionicons/icons";
import {FoodItem} from '../../models/food-item.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonImg],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public foodItem = input<FoodItem | undefined>();

  constructor() {
    addIcons({
      starOutline: starOutline,
      star: star,
      location: locationOutline,
      time: time,
    })
  }

  getStarIcons(rating: number | undefined): string[] {
    const stars = [];
    const fullStars = Math.floor(rating || 0);
    const hasHalfStar = rating ? rating % 1 >= 0.5 : false;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push('star');
      } else if (i === fullStars && hasHalfStar) {
        stars.push('star-half');
      } else {
        stars.push('star-outline');
      }
    }
    return stars;
  }

  ngOnInit() {
  }

}
