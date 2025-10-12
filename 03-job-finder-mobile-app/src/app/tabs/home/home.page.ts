import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {
  IonButton,
  IonButtons, IonCol,
  IonContent, IonGrid,
  IonHeader,
  IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonRow, IonSearchbar, IonText,
  IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Constants} from '../../constans/constants';
import {addIcons} from "ionicons";
import {appsOutline, options} from "ionicons/icons";
import {IonicSlides} from "@ionic/angular/standalone";
import {JobComponent} from "../../components/job/job.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonIcon, IonThumbnail, IonGrid, IonRow, IonCol, IonLabel, IonText, IonSearchbar, IonButton, IonList, IonListHeader, JobComponent, RouterLink, IonItem],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  public readonly title: string;
  public popular: any[] = [];
  public recent: any[] = [];
  public swiperModules = [IonicSlides];

  constructor() {
    this.title = Constants.HOME_TITLE;
    addIcons({appsOutline,options})
  }


  ngOnInit() {
    this.popular = [
      { id: 1, company: 'Technyks LLC', location: 'New Delhi', expires_on: '30/11/23', post: 'Senior UX Designer', type: 'Full Time', salary: '$40-90k/year', logo_dark: 'ct_dark.png', logo_light: 'ct_light.png' },
      { id: 2, company: 'Uber Technologies', location: 'Bangalore', expires_on: '07/12/23', post: 'Full-Stack Developer', type: 'Full Time', salary: '$30-80k/year', logo_dark: 'uber_dark.png', logo_light: 'uber_light.png' },
      { id: 3, company: 'LinkedIn Corp.', location: 'Mumbai', expires_on: '15/12/23', post: 'Lead UX Designer', type: 'Full Time', salary: '$30-70k/year', logo_dark: 'linkedin_dark.png', logo_light: 'linkedin_light.png' },
    ];
    this.recent = [
      { id: 4, company: 'TikTok', location: 'New Delhi', expires_on: '30/11/23', post: 'Senior UX Designer', type: 'Full Time', salary: '$40-90k/year', logo_dark: 'tiktok_dark.png', logo_light: 'tiktok_light.png' },
      { id: 2, company: 'Uber Technologies', location: 'Bangalore', expires_on: '07/12/23', post: 'Full-Stack Developer', type: 'Full Time', salary: '$30-80k/year', logo_dark: 'uber_dark.png', logo_light: 'uber_light.png' },
      { id: 3, company: 'LinkedIn Corp.', location: 'Mumbai', expires_on: '15/12/23', post: 'Lead UX Designer', type: 'Full Time', salary: '$30-70k/year', logo_dark: 'linkedin_dark.png', logo_light: 'linkedin_light.png' },
    ];
  }

}
