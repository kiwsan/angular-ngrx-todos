import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdInputActionComponent } from './md-input-action.component';

describe('MdInputActionComponent', () => {
  let component: MdInputActionComponent;
  let fixture: ComponentFixture<MdInputActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdInputActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdInputActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
