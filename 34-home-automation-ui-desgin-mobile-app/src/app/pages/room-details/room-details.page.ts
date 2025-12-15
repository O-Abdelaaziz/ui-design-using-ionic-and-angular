import {Component, inject, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonBackButton, IonButton,
  IonButtons, IonCard, IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonIcon, IonItem, IonLabel, IonRow, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Room} from "../../shared/models/room.model";
import {ActivatedRoute, Router} from "@angular/router";
import {roomsSeed} from "../../shared/seeds/romes.seed";
import {Device} from "../../shared/models/device.model";
import {devicesSeed} from "../../shared/seeds/device.seed";
import {DeviceCardComponent} from "../../shared/components/device-card/device-card.component";
import {addOutline, fileTrayStackedOutline} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.page.html',
  styleUrls: ['./room-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, IonGrid, IonRow, IonCol, DeviceCardComponent, IonItem, IonLabel, IonText, IonCard, IonIcon, IonButton]
})
export class RoomDetailsPage implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);
  private _router = inject(Router);

  public room = signal<Room>({} as Room);
  public devices = signal<Device[]>([]);

  constructor() {
    addIcons({
      'add': addOutline,
      'file-tray-stacked-outline': fileTrayStackedOutline,
    })
  }

  ngOnInit() {
    const id = this._activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.room.set(roomsSeed.find((room) => room.id === +id) || {} as Room);
      this.devices.set(devicesSeed.filter((device) => device.room_id === +id));
    } else {
      this._router.navigate(['/home']);
      return;
    }
  }

  addNewDevice() {

  }
}
