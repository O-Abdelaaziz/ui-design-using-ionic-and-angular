import {Component, input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {IonButton, IonIcon, IonText} from "@ionic/angular/standalone";

@Component({
  selector: 'app-action-button',
  standalone: true,
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
  imports: [
    IonButton,
    IonIcon,
    IonText
  ]
})
export class ActionButtonComponent  implements OnInit {
  iconColor = input<string>('medium');
  icon = input<string>();
  buttonName = input<string>();
  constructor() { }

  ngOnInit() {}

}
