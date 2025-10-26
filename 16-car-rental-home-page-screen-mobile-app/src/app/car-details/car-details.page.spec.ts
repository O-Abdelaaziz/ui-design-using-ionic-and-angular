import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarDetailsPage } from './car-details.page';

describe('CarDetailsPage', () => {
  let component: CarDetailsPage;
  let fixture: ComponentFixture<CarDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
