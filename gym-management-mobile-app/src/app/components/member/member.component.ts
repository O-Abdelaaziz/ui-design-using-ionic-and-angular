import {Component, input, OnInit} from '@angular/core';
import {
  IonAvatar,
  IonButton,
  IonCard, IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonRow,
  IonText
} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {chevronForwardCircle} from "ionicons/icons";
import {Member} from "../../interfaces/member";
import {RouterLink} from "@angular/router";
import {MemberPersonalDetailsComponent} from "../member-personal-details/member-personal-details.component";

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [
    IonLabel,
    IonCard,
    IonText,
    IonGrid,
    IonRow,
    IonCol,
    RouterLink,
    MemberPersonalDetailsComponent
  ],
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {
  public member = input<Member>();

  constructor() {
    addIcons({chevronForwardCircle})
  }

  ngOnInit() {
  }

}
