import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {
  IonAvatar,
  IonBadge,
  IonButton, IonButtons,
  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonCol,
  IonContent,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonListHeader,
  IonRow,
  IonSearchbar, IonSegment, IonSegmentButton,
  IonText,
  IonThumbnail, IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {
  arrowForwardOutline, calendarOutline, heartOutline,
  locateOutline,
  locationOutline,
  notificationsOutline,
  optionsOutline
} from "ionicons/icons";
import {Event} from "../../shared/models/event.model";
import {Category} from "../../shared/models/category.model";
import {IonicSlides} from "@ionic/angular";
import {events} from "../../shared/seeds/events.seed";
import {categories} from "../../shared/seeds/category.seed";
import {register} from "swiper/element/bundle";
import {RouterModule} from "@angular/router";
import {DatePipe, NgStyle} from "@angular/common";

register()

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [RouterModule, IonHeader, IonToolbar, IonContent, IonItem, IonLabel, IonText, IonIcon, IonFabButton, IonBadge, IonRow, IonCol, IonSearchbar, IonGrid, IonList, IonListHeader, IonCard, IonThumbnail, IonImg, DatePipe, IonItemDivider, IonButton, IonAvatar, IonSegment, IonSegmentButton, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButtons, IonTitle, NgStyle],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {
  swiperModules = [IonicSlides];
  // upcomingEvents: WritableSignal<Event[]> = signal([]);
  // currentEvents: WritableSignal<Event[]> = signal([]);
  // categories: WritableSignal<Category[]> = signal([]);

  upcomingEvents: Event[] = [];
  currentEvents: Event[] = [];
  featuredEvents: Event[] = [];
  categories: Category[] = [];

  constructor() {
    addIcons({
      'locate-outline': locateOutline,
      'notifications-outline': notificationsOutline,
      'options-outline': optionsOutline,
      'location-outline': locationOutline,
      'arrow-forward-outline': arrowForwardOutline,
    })
  }

  ngOnInit() {
    // this.currentEvents.set(events().filter(event => event.date < new Date().toISOString()));
    // this.upcomingEvents.set(events.filter(event => event.date > new Date().toISOString()));
    this.currentEvents = [...events.filter(event => event.date < new Date().toISOString())];
    this.featuredEvents = [...events.filter(event => event.featured)];
    // this.upcomingEvents = [...events.filter(event => event.date > new Date().toISOString())];
    this.upcomingEvents = events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    this.categories = [...categories];
  }
}
