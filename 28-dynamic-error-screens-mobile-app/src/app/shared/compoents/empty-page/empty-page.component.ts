import {Component, input, OnInit} from '@angular/core';
import {IonButton, IonCol, IonGrid, IonIcon, IonLabel, IonRow, IonText} from "@ionic/angular/standalone";

@Component({
  selector: 'app-empty-page',
  standalone: true,
  templateUrl: './empty-page.component.html',
  styleUrls: ['./empty-page.component.scss'],
  imports: [
    IonButton,
    IonCol,
    IonGrid,
    IonIcon,
    IonLabel,
    IonRow,
    IonText
  ]
})
export class EmptyPageComponent implements OnInit {

  public model = input<any>({});

  constructor() {
  }

  ngOnInit() {
  }

}
