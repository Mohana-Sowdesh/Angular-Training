import { Component } from '@angular/core';
import APP_MESSAGES from '../../constants/app-messages';
import APP_CONSTANTS from '../../constants/app-constants';
import { BlogTypeData } from 'src/app/models/blog-type-data.model';
import { ThemeConfigService } from 'src/app/services/theme-config.service';

@Component({
  selector: 'lbk-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  readonly filterHeading: string = APP_MESSAGES.FILTER_MSG;
  readonly blogType: BlogTypeData[] = APP_CONSTANTS.BLOG_TYPES;
  readonly viewMembersMsg: string = APP_MESSAGES.VIEW_MEMBERS;
  public switchModeMsg: string = APP_MESSAGES.SWITCH_TO_DARK_MODE;
  public showMembersModal: boolean = false;

  constructor(private themeConfigService: ThemeConfigService) {}

  /**
   * Function to be executed on clicking 'View Members' text
   */
  onViewMembersClick(): void {
    this.showMembersModal = true;
  }

  /**
   * Function to be executed on catching closeViewMembersModal event.
   * Sets the showMembersModal property to false
   */
  onHandleClick(): void {
    this.showMembersModal = false;
  }

  toggleTheme(): void {
    this.themeConfigService.toggleTheme();
    this.themeConfigService.isDarkThemeSelected 
      ? this.switchModeMsg = APP_MESSAGES.SWITCH_TO_LIGHT_MODE
      : this.switchModeMsg = APP_MESSAGES.SWITCH_TO_DARK_MODE;
  }
}
