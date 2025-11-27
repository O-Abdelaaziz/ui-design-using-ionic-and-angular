import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFabButton,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonThumbnail,
  IonToolbar,
  NavController
} from '@ionic/angular/standalone';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {
  arrowForwardOutline,
  chevronBackOutline,
  heart,
  heartOutline,
  person,
  personOutline,
  star,
  time
} from "ionicons/icons";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonButtons, IonFabButton, IonIcon, IonLabel, IonText, IonThumbnail, RouterLink, IonSegment, IonSegmentButton, IonGrid, IonCol, IonRow, IonItem, IonFooter, IonButton]
})
export class TripPage implements OnInit {
  public _navController = inject(NavController);
  private _activatedRoute = inject(ActivatedRoute);

  public segmentValue = '1';
  public currentImage: string = '';
  public item: any;
  trips = [
    {
      id: 1,
      name: 'United States',
      category: 'Camp',
      image: 'assets/images/trip-01.jpg',
      price: '12K',
      rating: 4.5,
      duration: 5,
      isFavorite: true,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      images: [
        'assets/images/slide-01.jpg',
        'assets/images/slide-02.jpg',
        'assets/images/slide-03.jpg'
      ],
      reviews: [
        {
          name: 'John Doe',
          rating: 3,
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
          name: 'John Doe',
          rating: 5,
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
          name: 'John Doe',
          rating: 4,
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        }
      ]
    },
    {
      id: 2,
      name: 'Swiss Alps',
      category: 'Mountains',
      image: 'assets/images/trip-02.jpg',
      price: '20K',
      rating: 5,
      duration: 4,
      isFavorite: false,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      images: [
        'assets/images/slide-01.jpg',
        'assets/images/slide-02.jpg',
        'assets/images/slide-03.jpg'
      ],
      reviews: [
        {
          name: 'John Doe',
          rating: 5,
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
          name: 'John Doe',
          rating: 2,
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
          name: 'John Doe',
          rating: 1,
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        }
      ]
    },
    {
      id: 3,
      name: 'Adi Kailash',
      category: 'Trekking',
      image: 'assets/images/trip-03.jpg',
      price: '5K',
      rating: 3.5,
      duration: 2,
      isFavorite: false,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      images: [
        'assets/images/slide-01.jpg',
        'assets/images/slide-02.jpg',
        'assets/images/slide-03.jpg'
      ],
      reviews: [
        {
          name: 'John Doe',
          rating: 3,
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
          name: 'John Doe',
          rating: 4,
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
          name: 'John Doe',
          rating: 2,
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        }
      ]
    },
    {
      id: 4,
      name: 'Tarsar Lake',
      category: 'Lake',
      image: 'assets/images/trip-03.jpg',
      price: '15K',
      rating: 3.5,
      duration: 3,
      isFavorite: false,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      images: [
        'assets/images/slide-01.jpg',
        'assets/images/slide-02.jpg',
        'assets/images/slide-03.jpg'
      ],
      reviews: [
        {
          name: 'John Doe',
          rating: 4,
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
          name: 'John Doe',
          rating: 4,
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
          name: 'John Doe',
          rating: 2,
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        }
      ]
    },
  ];

  constructor() {
    addIcons({
      'heart': heart,
      'heart-outline': heartOutline,
      'chevron-back-outline': chevronBackOutline,
      'arrow-forward-outline': arrowForwardOutline,
      'time': time,
      'star': star,
      'person': person,
      'person-outline': personOutline,
    })
  }

  ngOnInit() {
    const id = this._activatedRoute.snapshot.paramMap.get('id');
    console.log(id)
    if (!id) {
      this._navController.back();
      return;
    }
    this.item = this.trips.find(x => x.id == parseInt(id));
    this.currentImage = this.item.images[0];
  }

  segmentChanged(event: any) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }

  changeImage(image: any) {
    this.currentImage = image;
  }

  toggleFavorite() {
    this.item.isFavorite = !this.item.isFavorite;
  }

}
