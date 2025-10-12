import {Component, inject, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonRow,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addCircle, menu, notifications} from "ionicons/icons";
import {addIcons} from "ionicons";
import {MemberComponent} from "../../../components/member/member.component";
import {MemberService} from "../../../services/member.service";
import {Member} from "../../../interfaces/member";

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, IonSearchbar, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonList, IonItemGroup, IonItemDivider, IonLabel, MemberComponent]
})
export class MembersPage implements OnInit {
  public members = signal<Member[]>([])
  private _memberService = inject(MemberService);

  constructor() {
    addIcons({menu, notifications, addCircle})
  }

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.members.set(this._memberService.getMembers());
  }

}
