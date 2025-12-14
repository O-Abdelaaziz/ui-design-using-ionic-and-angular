import {Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit} from '@angular/core';
import {IonicSlides} from "@ionic/angular";
import {IonCol, IonRow, IonSkeletonText} from "@ionic/angular/standalone";

import {register} from "swiper/element/bundle";
import {Banner} from "../../models/banner.interface";
register()

@Component({
  selector: 'app-banner',
  standalone: true,
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  imports: [
    IonRow,
    IonCol,
    IonSkeletonText
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerComponent implements OnInit {
  public swiperModules = [IonicSlides]
  public bannerImages = input<Banner[]>([]);
  public slides = [
    {
      image: 'https://via.placeholder.com/800x400',
      title: 'Slide 1',
      description: 'Description 1'
    },
    {
      image: 'https://via.placeholder.com/800x400',
      title: 'Slide 2',
      description: 'Description 2'
    },
    {
      image: 'https://via.placeholder.com/800x400',
      title: 'Slide 3',
      description: 'Description 3'
    }
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
