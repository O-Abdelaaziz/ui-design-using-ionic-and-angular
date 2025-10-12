import {Injectable} from '@angular/core';
import {members} from "../mock-data/members.mock";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  getMembers() {
    return members;
  }

  getMemberById(id:number){
    return members.find((member) => member.id === id);
  }
}
