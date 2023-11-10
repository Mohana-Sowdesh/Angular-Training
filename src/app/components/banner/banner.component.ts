import { Component } from '@angular/core';
import { BANNER_IMG_PATH } from 'src/app/constants/app-constants';
@Component({
  selector: 'li-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  public bannerImgPath: string = BANNER_IMG_PATH;
}
