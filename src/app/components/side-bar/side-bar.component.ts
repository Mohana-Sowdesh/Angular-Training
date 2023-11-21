import { Component } from '@angular/core';
import APP_CONSTANTS from 'src/app/constants/app-constants';

@Component({
  selector: 'li-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  readonly logoImgPath: string = APP_CONSTANTS.LOGO_IMG_PATH;
  readonly menuList: string[] = APP_CONSTANTS.MENU_LIST;
}
