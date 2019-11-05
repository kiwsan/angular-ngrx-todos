import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgInputComponent } from './lg-input.component';

describe('LgInputComponent', () => {
  let component: LgInputComponent;
  let fixture: ComponentFixture<LgInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
