import {Component, input, OnInit} from '@angular/core';
import {Room} from "../../models/room.model";
import {IonAvatar, IonCard, IonCol, IonLabel, IonNote} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-room-card',
  standalone: true,
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss'],
  imports: [
    IonCard,
    RouterLink,
    IonCol,
    IonAvatar,
    IonLabel,
    IonNote
  ]
})
export class RoomCardComponent implements OnInit {
  public room = input<Room>()

  constructor() {
  }

  ngOnInit() {
  }

}
