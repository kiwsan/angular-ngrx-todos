import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoContainerEditorComponent} from './todo-container-editor.component';

describe('TodoEditorComponent', () => {
    let component: TodoContainerEditorComponent;
    let fixture: ComponentFixture<TodoContainerEditorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TodoContainerEditorComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoContainerEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
