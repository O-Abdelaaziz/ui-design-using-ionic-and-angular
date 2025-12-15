import {Component, OnInit, signal} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonAvatar, IonItem, IonLabel, IonText, IonCard, IonGrid, IonRow, IonCol, IonItemDivider, IonFab, IonFabButton
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {addOutline, cloudOutline, menuOutline} from "ionicons/icons";
import {RoomCardComponent} from "../../shared/components/room-card/room-card.component";
import {Room} from "../../shared/models/room.model";
import {roomsSeed} from "../../shared/seeds/romes.seed";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonContent, IonButtons, IonButton, IonIcon, IonAvatar, IonItem, IonLabel, IonText, IonCard, IonGrid, IonRow, IonCol, IonItemDivider, RoomCardComponent, IonFab, IonFabButton],
})
export class HomePage implements OnInit {
  public rooms = signal<Room[]>([])

  constructor() {
    addIcons({
      menu: menuOutline,
      cloud: cloudOutline,
      add: addOutline,
    })
  }

  ngOnInit(): void {
    this.rooms.set(roomsSeed)
  }

  openAddRoomModal() {

  }
}
