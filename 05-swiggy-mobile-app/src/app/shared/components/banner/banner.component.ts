import {Component, CUSTOM_ELEMENTS_SCHEMA, Input, input, OnInit} from '@angular/core';
import {IonCol, IonGrid, IonicSlides, IonRow} from "@ionic/angular/standalone";
import {register} from "swiper/element/bundle";

register()

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    IonGrid,
    IonRow,
    IonCol
  ],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerComponent implements OnInit {
  public swiperModules = [IonicSlides];
  @Input()
  public bannerImages : any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  onDoubleTap($event: any) {
    console.log($event)
  }
}
