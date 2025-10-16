import {Component, Input, OnInit, signal} from '@angular/core';
import {IonCol, IonGrid, IonIcon, IonLabel, IonRow, IonSkeletonText, IonText} from "@ionic/angular/standalone";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-restaurant-details',
  standalone: true,
  imports: [CommonModule, IonGrid, IonRow, IonCol, IonSkeletonText, IonLabel, IonText, IonIcon],
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss'],
})
export class RestaurantDetailsComponent implements OnInit {
  @Input() data: any;
  @Input() isLoading = signal(false);

  constructor() {
  }

  ngOnInit() {
  }

  getCuisines(cuisine: any) {
    return cuisine.join(', ');
  }
}
