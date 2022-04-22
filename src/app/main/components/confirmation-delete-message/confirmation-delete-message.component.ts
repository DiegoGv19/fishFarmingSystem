import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-delete-message',
  templateUrl: './confirmation-delete-message.component.html',
  styleUrls: ['./confirmation-delete-message.component.scss']
})
export class ConfirmationDeleteMessageComponent {

    @Output() continueEvent: EventEmitter<boolean> = new EventEmitter();

    public confirmationContinue(confirmation: boolean) {
        this.continueEvent.emit(confirmation)
    }
}
