import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-iot',
  templateUrl: './delete-iot.component.html',
  styleUrls: ['./delete-iot.component.scss']
})
export class DeleteIotComponent {

    @Output() continueEvent: EventEmitter<boolean> = new EventEmitter();

    public confirmationContinue(confirmation: boolean) {
        this.continueEvent.emit(confirmation)
    }

}
