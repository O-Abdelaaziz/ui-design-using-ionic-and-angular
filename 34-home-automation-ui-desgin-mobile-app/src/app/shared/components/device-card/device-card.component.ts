import {Component, input, OnInit, output} from '@angular/core';
import {Device} from "../../models/device.model";
import {IonCard, IonIcon, IonSkeletonText, IonToggle} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";
import {addIcons} from "ionicons";
import {
  bulbOutline,
  cubeOutline,
  fileTrayStackedOutline,
  flashlightOutline,
  leafOutline,
  radioOutline,
  snowOutline,
  tvOutline,
  waterOutline
} from "ionicons/icons";

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.scss'],
  standalone: true,
  imports: [FormsModule, IonCard, IonToggle, IonIcon, IonSkeletonText]
})
export class DeviceCardComponent implements OnInit {
  public readonly device = input<Device>();
  public deviceStatus = input<boolean>();
  public statusChange = output<boolean>();

  constructor() {
    addIcons({
      'bulb': bulbOutline,
      'tv': tvOutline,
      'snow': snowOutline,
      'flashlight': flashlightOutline,
      'leaf': leafOutline,
      'cube': cubeOutline,
      'radio': radioOutline,
      'water': waterOutline,
      'file-tray-stacked-outline': fileTrayStackedOutline,
    })
  }

  ngOnInit() {
  }

  onToggleChange(device: Device | undefined, event: CustomEvent) {
    const currentStatus = this.deviceStatus() ?? false;
    const newStatus = !currentStatus;
    this.statusChange.emit(newStatus);
  }

  getDeviceImage(name: string | undefined): string {
    // return `assets/devices/${name?.toLowerCase()}.png`;
    const imageNameMap: { [key: string]: string[] } = {
      'ceiling-light': ['ceiling light', 'ceiling'],
      'fan': ['fan', 'blower', 'blower fan'],
      'ac': ['ac', 'air conditioner', 'aircon'],
      'lamp': ['lamp', 'light', 'light bulb'],
      'purifier': ['purifier', 'air purifier', 'air purifier'],
      'tv': ['tv', 'television', 'television'],
      'nightstand': ['nightstand', 'nightstand', 'nightstand'],
      'desk': ['desk', 'desk', 'desk'],
      'study': ['study', 'study', 'study'],
      'kitchen': ['kitchen', 'kitchen', 'kitchen'],
      'bathroom': ['bathroom', 'bathroom', 'bathroom'],
      'garage': ['garage', 'garage', 'garage'],
    }

    const imageName = imageNameMap[name!.toLowerCase()];
    return `assets/devices/${imageName?.[0]}.png`;
  }
}
