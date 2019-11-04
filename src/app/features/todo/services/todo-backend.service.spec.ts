import {TestBed} from '@angular/core/testing';

import {TodoBackendService} from './todo-backend.service';

describe('TodoBackendService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: TodoBackendService = TestBed.get(TodoBackendService);
        expect(service).toBeTruthy();
    });
});
