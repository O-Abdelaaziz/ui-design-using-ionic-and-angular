import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemberDetailsPage } from './member-details.page';

describe('MemberDetailsPage', () => {
  let component: MemberDetailsPage;
  let fixture: ComponentFixture<MemberDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
