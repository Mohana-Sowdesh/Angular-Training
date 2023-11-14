import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { register } from 'swiper/element/bundle';
register();

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ProfileImgComponent } from './components/profile-img/profile-img.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BannerComponent } from './components/banner/banner.component';
import { BadgeComponent } from './components/badge/badge.component';
import { CourseComponent } from './components/course/course.component';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    SearchBoxComponent,
    ProfileImgComponent,
    ShoppingCartComponent,
    BannerComponent,
    BadgeComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SlickCarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
