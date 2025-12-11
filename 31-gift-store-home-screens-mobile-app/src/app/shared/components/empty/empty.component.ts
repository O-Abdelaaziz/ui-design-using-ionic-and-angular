import {Component, OnInit} from '@angular/core';
import {IonButton, IonIcon, IonText} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";
import {cartOutline} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-empty',
  standalone: true,
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss'],
  imports: [
    IonIcon,
    IonText,
    IonButton,
    RouterLink
  ]
})
export class EmptyComponent implements OnInit {

  constructor() {
    addIcons({cartOutline});
  }

  ngOnInit() {
  }

}
