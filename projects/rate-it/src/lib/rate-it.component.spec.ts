import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateItComponent } from './rate-it.component';

describe('RateItComponent', () => {
  let component: RateItComponent;
  let fixture: ComponentFixture<RateItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
