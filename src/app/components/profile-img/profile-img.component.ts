import { Component } from '@angular/core';
import APP_CONSTANTS from 'src/app/constants/app-constants';

@Component({
  selector: 'li-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrls: ['./profile-img.component.scss']
})

export class ProfileImgComponent {
  public profileImgPath: string = APP_CONSTANTS.PROFILE_IMG_PATH;
}
