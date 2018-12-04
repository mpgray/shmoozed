import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuyItemComponent } from './add-buy-item.component';

describe('AddBuyItemComponent', () => {
  let component: AddBuyItemComponent;
  let fixture: ComponentFixture<AddBuyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBuyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBuyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
