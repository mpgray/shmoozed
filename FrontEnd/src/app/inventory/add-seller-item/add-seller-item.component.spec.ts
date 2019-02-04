import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSellerItemComponent } from './add-seller-item.component';

describe('AddSellerItemComponent', () => {
  let component: AddSellerItemComponent;
  let fixture: ComponentFixture<AddSellerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSellerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSellerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
