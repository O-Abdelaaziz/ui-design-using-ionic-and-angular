import {Component, Input, input, InputSignal, OnInit} from '@angular/core';
import {IonIcon, IonItem, IonLabel, IonText, IonThumbnail} from "@ionic/angular/standalone";
import {distinct} from "rxjs";
import {DecimalPipe} from "@angular/common";
import {addIcons} from "ionicons";
import {star} from "ionicons/icons";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [IonItem, IonThumbnail, IonLabel, IonText, IonIcon, DecimalPipe],
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {
  @Input()
  public restaurant: any;

  constructor() {
    addIcons({
      star
    })
  }

  ngOnInit() {
  }

  getCuisine(cuisines: any) {
    return cuisines.join(", ");
  }

  protected readonly distinct = distinct;
}
