import {Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit} from '@angular/core';
import {Category} from "../../models/category.model";
import {IonicSlides} from "@ionic/angular";
import {IonButton, IonCol, IonIcon, IonNote, IonRow, IonSkeletonText} from "@ionic/angular/standalone";
import {ImageCircleComponent} from "../../widgets/image-circle/image-circle.component";
import {addIcons} from "ionicons";
import {refreshOutline} from "ionicons/icons";

@Component({
  selector: 'app-categories',
  standalone: true,
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  imports: [
    IonRow,
    IonCol,
    ImageCircleComponent,
    IonSkeletonText,
    IonNote,
    IonIcon,
    IonButton
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoriesComponent implements OnInit {
  public categories = input<Category[]>([])
  public swiperModules = [IonicSlides];
  // 320: { slidesPerView: 2.5 },
  breakpoints = {
    320: { slidesPerView: 4 },
    480: { slidesPerView: 3.5 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 }
  };

  constructor() {
    addIcons({
      refresh: refreshOutline,
    })
  }

  ngOnInit() {
  }

  retryLoading() {
    this.categories()
  }
}
