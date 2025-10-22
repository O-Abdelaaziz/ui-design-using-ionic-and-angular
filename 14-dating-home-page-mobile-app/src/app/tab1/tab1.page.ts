import {Component} from '@angular/core';
import {IonAvatar, IonCard, IonContent, IonHeader, IonInput, IonToolbar} from '@ionic/angular/standalone';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [CommonModule, RouterModule, IonHeader, IonToolbar, IonContent, IonInput, IonCard, IonAvatar],
})
export class Tab1Page {
  constructor() {
  }
}
