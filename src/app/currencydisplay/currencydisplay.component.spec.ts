import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencydisplayComponent } from './currencydisplay.component';

describe('CurrencydisplayComponent', () => {
  let component: CurrencydisplayComponent;
  let fixture: ComponentFixture<CurrencydisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencydisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencydisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
