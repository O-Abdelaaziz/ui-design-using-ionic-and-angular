import {Component, input, OnInit} from '@angular/core';
import {IonCard, IonIcon, IonImg, IonItem, IonLabel, IonText, IonThumbnail} from "@ionic/angular/standalone";
import {Product} from "../../models/product.model";
import {CurrencyPipe} from "@angular/common";
import {RouterModule} from "@angular/router";
import {VegNonvegIndicatorComponent} from "../../widgets/veg-nonveg-indicator/veg-nonveg-indicator.component";

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  imports: [
    IonCard,
    IonThumbnail,
    IonImg,
    IonIcon,
    IonItem,
    IonLabel,
    IonText,
    CurrencyPipe,
    RouterModule,
    VegNonvegIndicatorComponent
  ]
})
export class ProductComponent  implements OnInit {
  item = input<Product>();
  constructor() { }

  ngOnInit() {}

}
