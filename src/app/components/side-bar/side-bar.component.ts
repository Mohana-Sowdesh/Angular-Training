import { Component } from '@angular/core';
import APP_CONSTANTS from 'src/app/constants/app-constants';

@Component({
  selector: 'li-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  public logoImgPath: string = APP_CONSTANTS.LOGO_IMG_PATH;
  public menuList:string[] = ['Dashboard', 'Explore courses', 'My courses', 'Notes', 'Settings'];
}
