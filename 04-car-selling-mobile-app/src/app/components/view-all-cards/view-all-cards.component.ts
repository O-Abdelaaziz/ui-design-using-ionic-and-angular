import {Component, input, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {IonButton, IonIcon, IonLabel} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {arrowForwardCircleOutline} from "ionicons/icons";

@Component({
  selector: 'app-view-all-cards',
  standalone: true,
  imports: [
    RouterLink,
    IonButton,
    IonLabel,
    IonIcon,
  ],
  templateUrl: './view-all-cards.component.html',
  styleUrls: ['./view-all-cards.component.scss'],
})
export class ViewAllCardsComponent implements OnInit {
  public route = input<string[]>()

  constructor() {
    addIcons({
      'arrow-forward-circle-outline': arrowForwardCircleOutline,
    })
  }

  ngOnInit() {
  }

}
