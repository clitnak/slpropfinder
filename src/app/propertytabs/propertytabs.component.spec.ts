import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertytabsComponent } from './propertytabs.component';

describe('PropertytabsComponent', () => {
  let component: PropertytabsComponent;
  let fixture: ComponentFixture<PropertytabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertytabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertytabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
