import {Component, input, OnInit} from '@angular/core';
import {Brand} from "../../interfaces/brand.interface";
import {IonAvatar, IonBadge, IonCard, IonCol, IonLabel} from "@ionic/angular/standalone";
import {ViewAllCardsComponent} from "../view-all-cards/view-all-cards.component";

@Component({
  selector: 'app-brand-item',
  standalone: true,
  imports: [IonCard, IonCol, IonAvatar, IonBadge, IonLabel, ViewAllCardsComponent],
  templateUrl: './brand-item.component.html',
  styleUrls: ['./brand-item.component.scss'],
})
export class BrandItemComponent implements OnInit {
  readonly brand = input<Brand>();
  readonly isViewAll = input<boolean>(false);

  constructor() {
  }

  ngOnInit() {
  }

}
