import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XsInputActionComponent } from './xs-input-action.component';

describe('XsInputActionComponent', () => {
  let component: XsInputActionComponent;
  let fixture: ComponentFixture<XsInputActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XsInputActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XsInputActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
