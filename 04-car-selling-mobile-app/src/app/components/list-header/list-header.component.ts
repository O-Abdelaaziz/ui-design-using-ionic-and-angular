import {Component, input, OnInit} from '@angular/core';
import {IonButton, IonIcon, IonItemDivider, IonLabel} from "@ionic/angular/standalone";

@Component({
  selector: 'app-list-header',
  standalone: true,
  imports: [
    IonItemDivider,
    IonLabel,
    IonButton,
    IonIcon
  ],
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss'],
})
export class ListHeaderComponent implements OnInit {
  public readonly heading = input.required<string>();
  public readonly buttonName = input<string>();
  public readonly buttonIcon = input.required<string>();
  public readonly buttonColor = input.required<string>();

  constructor() {
  }

  ngOnInit() {
  }

}
