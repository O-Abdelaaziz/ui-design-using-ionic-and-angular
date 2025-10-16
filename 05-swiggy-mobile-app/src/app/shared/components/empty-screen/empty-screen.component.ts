import {Component, Input, input, OnInit} from '@angular/core';
import {IonCol, IonGrid, IonIcon, IonLabel, IonRow, IonText} from "@ionic/angular/standalone";
import {CommonModule} from "@angular/common";

export interface EmptyScreenModel {
  icon: string;
  color: string;
  title: string;
  subTitle: string;
}

@Component({
  selector: 'app-empty-screen',
  standalone: true,
  imports: [
    CommonModule,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonLabel,
    IonText
  ],
  templateUrl: './empty-screen.component.html',
  styleUrls: ['./empty-screen.component.scss'],
})
export class EmptyScreenComponent implements OnInit {
  // public model = input<EmptyScreenModel>();
  @Input() model: any;

  constructor() {
  }

  ngOnInit() {
  }

}
