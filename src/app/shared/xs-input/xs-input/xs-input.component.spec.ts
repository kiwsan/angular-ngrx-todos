import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XsInputComponent } from './xs-input.component';

describe('XsInputComponent', () => {
  let component: XsInputComponent;
  let fixture: ComponentFixture<XsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
