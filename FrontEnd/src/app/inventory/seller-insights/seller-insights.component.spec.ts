import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerInsightsComponent } from './seller-insights.component';

describe('SellerInsightsComponent', () => {
  let component: SellerInsightsComponent;
  let fixture: ComponentFixture<SellerInsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerInsightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
