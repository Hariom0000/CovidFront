import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrybycodeComponent } from './countrybycode.component';

describe('CountrybycodeComponent', () => {
  let component: CountrybycodeComponent;
  let fixture: ComponentFixture<CountrybycodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrybycodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrybycodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
