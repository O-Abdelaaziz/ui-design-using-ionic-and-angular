import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonChip, IonContent, IonFooter, IonHeader, IonLabel, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {register} from 'swiper/element/bundle';
import {RouterLink} from "@angular/router";

register();

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.page.html',
  styleUrls: ['./profile-details.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, CommonModule, FormsModule, IonChip, IonFooter, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileDetailsPage implements OnInit {
  isShowMore = false;
  hobbies = [
    'Music',
    'Traveling',
    'Reading',
    'Swimming',
    'Painting'
  ]

  constructor() {
  }

  ngOnInit() {
  }

  getColor(i: any) {
    let colors = ['#ED93D5', '#94DAEC', '#FB6175', '#FAD02E', '#7AE22F']
    return colors[i];
  }

  toggleShowMore() {
    this.isShowMore = !this.isShowMore;
  }
}
