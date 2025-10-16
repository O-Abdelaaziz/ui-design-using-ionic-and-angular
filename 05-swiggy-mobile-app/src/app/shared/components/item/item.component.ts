import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {IonIcon, IonItem, IonLabel, IonRow, IonText, IonThumbnail} from "@ionic/angular/standalone";

@Component({
  selector: 'app-item',
  standalone: true,
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  imports: [
    CurrencyPipe,
    IonIcon,
    IonItem,
    IonLabel,
    IonRow,
    IonText,
    IonThumbnail
  ]
})
export class ItemComponent implements OnInit {
  @Input() item: any;
  @Input() index: number = 0;
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onAddItem() {
    this.add.emit(this.index);
  }

  onRemoveItem() {
    this.remove.emit(this.index);
  }

}
