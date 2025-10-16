import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IonIcon, IonItem, IonLabel, IonRow, IonText} from "@ionic/angular/standalone";
import {DecimalPipe} from "@angular/common";
import {addOutline, removeOutline} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [IonItem, IonText, IonLabel, IonRow, IonIcon, DecimalPipe],
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() item: any;
  @Input() index: any;
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() minus: EventEmitter<any> = new EventEmitter();

  constructor() {
    addIcons({
      removeOutline,
      addOutline,
    })
  }

  ngOnInit() {
  }

  quantityPlus() {
    this.add.emit(this.index);
  }

  quantityMinus() {
    this.minus.emit(this.index);
  }
}
