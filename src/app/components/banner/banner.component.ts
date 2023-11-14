import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import APP_CONSTANTS from 'src/app/constants/app-constants';

@Component({
  selector: 'li-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})

export class BannerComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    // const swiperContainer:HTMLElement  = document.querySelector('.swiper-pagination-bullet') || document.createElement('<div></div>');
    // swiperContainer && (swiperContainer.style.background = '#00ff00');
  }

  public bannerImgPath: string = APP_CONSTANTS.BANNER_IMG_PATH;

}
