import {Component, input, OnInit} from '@angular/core';
import {IonButton, IonItemDivider, IonLabel} from "@ionic/angular/standalone";

@Component({
  selector: 'app-list-heading',
  standalone: true,
  templateUrl: './list-heading.component.html',
  styleUrls: ['./list-heading.component.scss'],
  imports: [
    IonItemDivider,
    IonLabel,
    IonButton
  ]
})
export class ListHeadingComponent implements OnInit {
  headingText = input<string>('Heading');
  buttonText = input<string>('See More');

  constructor() {
  }

  ngOnInit() {
  }

}
