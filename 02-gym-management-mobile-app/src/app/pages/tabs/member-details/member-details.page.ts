import {Component, inject, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol,
  IonContent,
  IonHeader,
  IonIcon, IonItemDivider, IonLabel, IonRow,
  IonTitle,
  IonToolbar, NavController
} from '@ionic/angular/standalone';
import {
  MemberPersonalDetailsComponent
} from "../../../components/member-personal-details/member-personal-details.component";
import {members} from "../../../mock-data/members.mock";
import {Member} from "../../../interfaces/member";
import {ActivatedRoute} from "@angular/router";
import {MemberService} from 'src/app/services/member.service';
import {InfoCardComponent} from "../../../widgets/info-card/info-card.component";
import {ActionButtonComponent} from "../../../widgets/action-button/action-button.component";
import {addIcons} from "ionicons";
import {addCircle, ban, barbell, call, chatboxEllipses, logoWhatsapp, notifications, person} from "ionicons/icons";

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.page.html',
  styleUrls: ['./member-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonIcon, IonBackButton, IonCard, MemberPersonalDetailsComponent, IonRow, IonCol, IonItemDivider, IonCardHeader, IonLabel, InfoCardComponent, IonCardContent, ActionButtonComponent]
})
export class MemberDetailsPage implements OnInit {
  public member = signal<Member | null>(null);
  public id: number = 0;

  public _memberService = inject(MemberService);
  private _activatedRoute = inject(ActivatedRoute);
  private _navController = inject(NavController);

  constructor() {
    addIcons({
      addCircle,
      notifications,
      call,
      logoWhatsapp,
      chatboxEllipses,
      person,
      barbell,
      ban,
    })
  }

  ngOnInit() {
    const id = this._activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    if (!id) {
      this._navController.back();
    }
    this.id = Number(id);
    this.getMember();
  }

  getMember() {
    const member = this._memberService.getMemberById(this.id);
    if (member) {
      this.member.set(member);
    }
  }


}
