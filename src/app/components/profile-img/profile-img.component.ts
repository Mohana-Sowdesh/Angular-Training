import { Component } from '@angular/core';
import { PROFILE_IMG_PATH } from 'src/app/constants/app-constants';

@Component({
  selector: 'li-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrls: ['./profile-img.component.scss']
})
export class ProfileImgComponent {
  public profileImgPath: string = PROFILE_IMG_PATH;
}
