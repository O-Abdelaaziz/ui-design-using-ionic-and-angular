import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {

  public items = [
    {id: 1, name: 'juice', price: 12},
    {id: 1, name: 'juice', price: 16},
  ]

  constructor() {
  }

  getTotal(): Promise<number> {
    return new Promise((resolve, reject) => {
      if (this.items.length === 0) reject('no items found');

      let total = 0;
      this.items.forEach(item => {
        total += item.price;
      })
      resolve(total);
    })
  };

  ngOnInit(): void {
    console.log("ngOnInit triggered");
  }

  ionViewWillEnter(): void {
    console.log("ionViewWillEnter triggered");
  }

  ionViewDidEnter(): void {
    console.log("ionViewDidEnter triggered");
  }

  ionViewWillLeave(): void {
    console.log("ionViewWillLeave triggered");
  }

  ionViewDidLeave(): void {
    console.log("ionViewDidLeave triggered");
  }


}
