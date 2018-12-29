import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPropertyComponent } from './buy-property.component';

describe('BuyPropertyComponent', () => {
  let component: BuyPropertyComponent;
  let fixture: ComponentFixture<BuyPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
