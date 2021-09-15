import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementsOffersComponent } from './settlements-offers.component';

describe('SettlementsOffersComponent', () => {
  let component: SettlementsOffersComponent;
  let fixture: ComponentFixture<SettlementsOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettlementsOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementsOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
