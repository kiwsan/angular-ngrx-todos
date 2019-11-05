import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdInputComponent } from './md-input.component';

describe('MdInputComponent', () => {
  let component: MdInputComponent;
  let fixture: ComponentFixture<MdInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
