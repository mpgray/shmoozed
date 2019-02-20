import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyersearchComponent } from './buyersearch.component';

describe('BuyersearchComponent', () => {
  let component: BuyersearchComponent;
  let fixture: ComponentFixture<BuyersearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyersearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
