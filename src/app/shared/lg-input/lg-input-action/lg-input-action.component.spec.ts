import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgInputActionComponent } from './lg-input-action.component';

describe('LgInputActionComponent', () => {
  let component: LgInputActionComponent;
  let fixture: ComponentFixture<LgInputActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgInputActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgInputActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
