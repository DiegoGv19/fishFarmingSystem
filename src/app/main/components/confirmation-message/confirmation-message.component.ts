import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-message',
  templateUrl: './confirmation-message.component.html',
  styleUrls: ['./confirmation-message.component.scss']
})
export class ConfirmationMessageComponent {

    @Output() continueEvent: EventEmitter<boolean> = new EventEmitter();

    public confirmationContinue(confirmation: boolean) {
        this.continueEvent.emit(confirmation)
    }
}
