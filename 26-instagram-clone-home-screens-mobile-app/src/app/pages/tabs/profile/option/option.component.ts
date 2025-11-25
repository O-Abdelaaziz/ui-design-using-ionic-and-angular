import {Component, inject, OnInit} from '@angular/core';
import {IonicModule, ModalController} from "@ionic/angular";
import {
  archiveOutline,
  barChartOutline,
  bookmarkOutline,
  heartCircleOutline,
  listOutline,
  personAddOutline,
  qrCodeOutline, settingsSharp,
  timeOutline
} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [
    IonicModule
  ],
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
})
export class OptionComponent implements OnInit {
  public _modalController = inject(ModalController);
  options = [
    {icon: 'settings-sharp', label: 'Settings', redirectTo: ''},
    {icon: 'archive-outline', label: 'Archive', redirectTo: ''},
    {icon: 'bar-chart-outline', label: 'Insights', redirectTo: ''},
    {icon: 'time-outline', label: 'Your activity', redirectTo: ''},
    {icon: 'qr-code-outline', label: 'QR Code', redirectTo: ''},
    {icon: 'bookmark-outline', label: 'Saved', redirectTo: ''},
    {icon: 'list-outline', label: 'Close friends', redirectTo: ''},
    {icon: 'person-add-outline', label: 'Discover people', redirectTo: ''},
    {icon: 'heart-circle-outline', label: 'COVID-19 Information Centre', redirectTo: ''},
  ];

  constructor() {
    addIcons({
      'settings-sharp': settingsSharp,
      'archive-outline': archiveOutline,
      'bar-chart-outline': barChartOutline,
      'time-outline': timeOutline,
      'qr-code-outline': qrCodeOutline,
      'bookmark-outline': bookmarkOutline,
      'list-outline': listOutline,
      'person-add-outline': personAddOutline,
      'heart-circle-outline': heartCircleOutline,
    })
  }

  ngOnInit() {
  }

}
