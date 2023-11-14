import { Component } from '@angular/core';
import APP_CONSTANTS from 'src/app/constants/app-constants';

@Component({
  selector: 'li-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  public bannerImgPath: string = APP_CONSTANTS.BANNER_IMG_PATH;
}
