import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-lg-input-action',
    templateUrl: './lg-input-action.component.html',
    styleUrls: ['./lg-input-action.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LgInputActionComponent {

    @Input()
    disabled = false;
    @Input()
    faIcon = '';
    @Input()
    label = '';
    @Input()
    color = '';

    @Output()
    action = new EventEmitter<void>();

    onClick() {
        this.action.emit();
    }
}
