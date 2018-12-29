import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellPropertyComponent } from './sell-property.component';

describe('SellPropertyComponent', () => {
  let component: SellPropertyComponent;
  let fixture: ComponentFixture<SellPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
