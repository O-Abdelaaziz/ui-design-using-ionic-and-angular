import {Component, input, OnInit} from '@angular/core';
import {IonCol, IonGrid, IonRow} from "@ionic/angular/standalone";
import {Router} from "@angular/router";

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [IonGrid, IonRow, IonCol,],
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent implements OnInit {
  public title = input<string>();
  public moreText = input<string>();
  public moreLink = input<string>();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onMoreClick() {
    this.router.navigate([this.moreLink()]);
  }
}
