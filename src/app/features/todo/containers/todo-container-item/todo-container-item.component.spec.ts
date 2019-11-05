import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoContainerItemComponent} from './todo-container-item.component';

describe('TodoItemComponent', () => {
    let component: TodoContainerItemComponent;
    let fixture: ComponentFixture<TodoContainerItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TodoContainerItemComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoContainerItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
