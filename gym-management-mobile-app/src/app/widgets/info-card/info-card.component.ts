import {Component, input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {IonLabel, IonText} from "@ionic/angular/standalone";

@Component({
  selector: 'app-info-card',
  standalone: true,
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
  imports: [
    IonLabel,
    IonText
  ]
})
export class InfoCardComponent implements OnInit {
  heading = input<string>('');
  value = input<any>();

  constructor() {
  }

  ngOnInit() {
  }

}
