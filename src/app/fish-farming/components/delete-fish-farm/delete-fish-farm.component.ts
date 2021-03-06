import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-fish-farm',
  templateUrl: './delete-fish-farm.component.html',
  styleUrls: ['./delete-fish-farm.component.scss']
})
export class DeleteFishFarmComponent {
    @Output() continueEvent: EventEmitter<boolean> = new EventEmitter();

    public confirmationContinue(confirmation: boolean) {
        this.continueEvent.emit(confirmation)
    }
}
