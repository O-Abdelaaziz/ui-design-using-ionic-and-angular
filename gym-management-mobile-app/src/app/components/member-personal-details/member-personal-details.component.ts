import {Component, input, OnInit} from '@angular/core';
import {Member} from "../../interfaces/member";
import {IonAvatar, IonButton, IonIcon, IonItem, IonLabel, IonText} from "@ionic/angular/standalone";

@Component({
  selector: 'app-member-personal-details',
  standalone: true,
  templateUrl: './member-personal-details.component.html',
  styleUrls: ['./member-personal-details.component.scss'],
  imports: [
    IonAvatar,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon,
    IonText,
  ]
})
export class MemberPersonalDetailsComponent  implements OnInit {
  public member= input<Member>();
  public isList=input<boolean>(true);
  constructor() { }

  ngOnInit() {}


}
