import {Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel, IonList,
  IonRow, IonSegment, IonSegmentButton,
  IonText,
  IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {
  add,
  addCircleOutline,
  chevronDownOutline, grid, gridOutline,
  images,
  imagesOutline,
  menuOutline, videocam,
  videocamOutline
} from "ionicons/icons";
import {register} from 'swiper/element/bundle';
import {OptionComponent} from "./option/option.component";
import {ModalController} from "@ionic/angular/standalone";

register();

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonThumbnail, IonLabel, IonText, IonFab, IonFabButton, IonSegment, IonSegmentButton, IonList],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfilePage implements OnInit {
  private _modalController = inject(ModalController);

  public currentMood: { id: number, text: string } | null = null;
  public segmentValue = signal('grid');
  private daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  private generalMoodIds = [8, 9, 10];

  public moods: { id: number, text: string }[] = [
    {id: 1, text: 'mood'},        // Sunday
    {id: 2, text: 'thoughts'},    // Monday
    {id: 3, text: 'wisdom'},      // Tuesday
    {id: 4, text: 'vibes'},       // Wednesday
    {id: 5, text: 'feeling'},     // Thursday
    {id: 6, text: 'mood'},        // Friday
    {id: 7, text: 'reflections'}, // Saturday
    {id: 8, text: 'Share a note'},
    {id: 9, text: 'Whats new?'},
    {id: 10, text: 'Whats on your playlist?'},
  ];
  public stories = [
    {id: 1, image: '/assets/images/story-01.jpg', name: 'John Doe'},
    {id: 2, image: '/assets/images/story-02.jpg', name: 'John Doe'},
    {id: 3, image: '/assets/images/story-03.jpg', name: 'John Doe'},
    {id: 4, image: '/assets/images/story-04.jpg', name: 'John Doe'},
    {id: 5, image: '/assets/images/story-05.jpg', name: 'John Doe'},
    {id: 6, image: '/assets/images/story-06.jpg', name: 'John Doe'},
    {id: 7, image: '/assets/images/story-07.jpg', name: 'John Doe'},
    {id: 8, image: '/assets/images/story-08.jpg', name: 'John Doe'},
    {id: 9, image: '/assets/images/story-09.jpg', name: 'John Doe'},
    {id: 10, image: '/assets/images/story-10.jpg', name: 'John Doe'},
  ];
  public segmentItems = [
    {id: 1, value: 'grid', label: 'Grid', icon: 'grid', outlineIcon: 'grid-outline'},
    {id: 2, value: 'reels', label: 'Reels', icon: 'videocam', outlineIcon: 'videocam-outline'},
    {id: 3, value: 'saved', label: 'Saved', icon: 'images', outlineIcon: 'images-outline'},
  ];
  public images: { id: number, url: string }[] = [
    {id: 1, url: '/assets/images/post-01.jpg'},
    {id: 2, url: '/assets/images/post-02.jpg'},
    {id: 3, url: '/assets/images/post-03.jpg'},
    {id: 4, url: '/assets/images/post-04.jpg'},
    {id: 5, url: '/assets/images/post-05.jpg'},
    {id: 6, url: '/assets/images/post-06.jpg'},
    {id: 7, url: '/assets/images/post-07.jpg'},
    {id: 8, url: '/assets/images/post-08.jpg'},
    {id: 9, url: '/assets/images/post-09.jpg'},
    {id: 10, url: '/assets/images/post-10.jpg'},
  ];

  constructor() {
    addIcons({
      'chevron-down-outline': chevronDownOutline,
      'add-circle-outline': addCircleOutline,
      'menu-outline': menuOutline,
      'add': add,
      'grid': grid,
      'grid-outline': gridOutline,
      'videocam': videocam,
      'videocam-outline': videocamOutline,
      'images': images,
      'images-outline': imagesOutline,
    })
  }

  ngOnInit() {
    this.setDailyMood();
  }

  private setDailyMood() {
    const today = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)
    const dayMood = {
      id: today + 1, // +1 because array is 0-based but IDs start at 1
      text: `${this.daysOfWeek[today]} ${this.moods[today].text}`
    };

    // Get general moods
    const generalMoods = this.moods.filter(mood => this.generalMoodIds.includes(mood.id));

    // Combine today's mood with general moods
    const possibleMoods = [dayMood, ...generalMoods];

    // Pick a random mood from the combined array
    const randomIndex = Math.floor(Math.random() * possibleMoods.length);
    this.currentMood = possibleMoods[randomIndex];
  }

  public getRandomMood(): { id: number, text: string } {
    const randomIndex = Math.floor(Math.random() * this.moods.length);
    return {
      ...this.moods[randomIndex],
      text: this.moods[randomIndex].text.replace(/^\w+/, 'Random')
    };
  }

  public onSegmentChanged(event: any) {
    console.log(event.detail.value);
    this.segmentValue.set(event.detail.value);
  }

  async onOptionsClick() {
    const options = {
      component: OptionComponent,
      cssClass: 'custom-modal',
      swipeToClose: true //ios only
      // componentProps: { //to pass data to the modal
      //   options: this.options
      // }

    };
    const modal = await this._modalController.create(options);
    await modal.present();

  }
}
