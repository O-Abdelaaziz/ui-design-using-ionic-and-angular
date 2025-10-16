import { Component, OnInit } from '@angular/core';
import {IonItem, IonLabel, IonList, IonSkeletonText, IonThumbnail} from "@ionic/angular/standalone";

@Component({
  selector: 'app-loading-restaurant',
  standalone: true,
  imports: [IonList, IonItem, IonThumbnail, IonSkeletonText, IonLabel],
  templateUrl: './loading-restaurant.component.html',
  styleUrls: ['./loading-restaurant.component.scss'],
})
export class LoadingRestaurantComponent  implements OnInit {
  dummyData= Array(10);
  constructor() { }

  ngOnInit() {}

}
