import { Component, EventEmitter, Output } from '@angular/core';
import APP_CONSTANTS from '../../constants/app-constants';
import APP_MESSAGES from '../../constants/app-messages';
import { MemberDetails } from 'src/app/models/member-details.model';

@Component({
  selector: 'lbk-members-modal',
  templateUrl: './members-modal.component.html',
  styleUrls: ['./members-modal.component.scss']
})
export class MembersModalComponent {
  readonly membersDetails: MemberDetails[] = APP_CONSTANTS.MEMBERS_DATA;
  readonly memberHeadingText: string = APP_MESSAGES.MEMBERS_HEADING;
  @Output() closeViewMembersModal: EventEmitter<void> = new EventEmitter<void>();
  
  /**
   * Function to be executed on clicking the backdrop. This will emit an event. 
   */
  onClose() {
    this.closeViewMembersModal.emit();
  }
}
