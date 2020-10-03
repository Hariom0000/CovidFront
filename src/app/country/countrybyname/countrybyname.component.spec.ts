import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrybynameComponent } from './countrybyname.component';

describe('CountrybynameComponent', () => {
  let component: CountrybynameComponent;
  let fixture: ComponentFixture<CountrybynameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrybynameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrybynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
