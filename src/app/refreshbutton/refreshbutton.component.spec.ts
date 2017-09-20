import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshbuttonComponent } from './refreshbutton.component';

describe('RefreshbuttonComponent', () => {
  let component: RefreshbuttonComponent;
  let fixture: ComponentFixture<RefreshbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
