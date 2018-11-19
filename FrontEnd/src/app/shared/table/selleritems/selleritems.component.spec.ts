import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelleritemsComponent } from './selleritems.component';

describe('SelleritemsComponent', () => {
  let component: SelleritemsComponent;
  let fixture: ComponentFixture<SelleritemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelleritemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelleritemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
