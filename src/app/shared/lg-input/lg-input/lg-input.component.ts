import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'app-lg-input',
    templateUrl: './lg-input.component.html',
    styleUrls: ['./lg-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LgInputComponent {

    @Input()
    placeholder: string;

    @Input()
    value = '';
    @Input()
    disabled = false;

    hasFocus = false;
}
