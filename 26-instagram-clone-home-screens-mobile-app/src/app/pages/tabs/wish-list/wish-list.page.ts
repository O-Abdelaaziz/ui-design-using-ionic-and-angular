import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonAvatar,
  IonButton,
  IonButtons, IonCol,
  IonContent, IonFab, IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonRow, IonText, IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {register} from 'swiper/element/bundle';
import {addIcons} from "ionicons";
import {chatbubbleEllipsesOutline, heart, heartOutline} from "ionicons/icons";

register();

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.page.html',
  styleUrls: ['./wish-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonButton, IonGrid, IonRow, IonCol, IonText, IonFab, IonFabButton, IonList, IonItem, IonLabel, IonListHeader, IonThumbnail],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WishListPage implements OnInit {
  public activeTab = signal('all');

  public slides = [
    {id: 1, label: 'all', name: 'All activity', notifications: '+50'},
    {id: 2, label: 'likes', name: 'Likes', notifications: '42'},
    {id: 3, label: 'comments', name: 'Comments', notifications: '16'},
    {id: 4, label: 'mentions', name: 'Mentions', notifications: '12'},
  ];

  public activities: any[] = [
    {
      id: 1,
      username: 'jhon_doe',
      user_profile: 'assets/images/story-01.jpg',
      time: '2 min',
      activity: 'follow'
    },
    {
      id: 2,
      username: 'jhon_doe',
      user_profile: 'assets/images/story-02.jpg',
      time: '3 mins',
      activity: 'comment',
      comments: 'Great content without a doubt. I am your big fan of you.',
      post: 'assets/images/post-01.jpg'
    },
    {
      id: 3,
      username: 'jhon_doe',
      user_profile: 'assets/images/story-03.jpg',
      time: '3w',
      activity: 'follow'
    },
    {
      id: 4,
      username: 'jhon_doe',
      user_profile: 'assets/images/story-04.jpg',
      time: '2 mins',
      activity: 'follow'
    },
    {
      id: 5,
      username: 'jhon_doe',
      user_profile: 'assets/images/story-05.jpg',
      time: '5 mins',
      activity: 'comment',
      comments: 'Nice design. It\'s good to see different layouts and design for such commons elements. Good job!.',
      post: 'assets/images/post-02.jpg'

    },
    {
      id: 6,
      username: 'jhon_doe',
      user_profile: 'assets/images/story-06.jpg',
      time: '1d',
      activity: 'follow'
    },
  ];

  constructor() {
    addIcons({
      'heart': heart,
      'heart-outline': heartOutline,
      'chatbubble-ellipses-outline': chatbubbleEllipsesOutline,
    })
  }

  ngOnInit() {
  }

  onSlideClick(tabValue: string) {
    this.activeTab.set(tabValue);
    console.log('Active tab:', tabValue);
  }

  likeComment(item: any) {
    item.like = !item?.like;
  }
}
