import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BlogsMenuComponent } from './components/blogs-menu/blogs-menu.component';
import { ReadBlogAreaComponent } from './components/read-blog-area/read-blog-area.component';
import { LogoComponent } from './components/logo/logo.component';
import { TagsWithCheckboxComponent } from './components/tags-with-checkbox/tags-with-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    BlogsMenuComponent,
    ReadBlogAreaComponent,
    LogoComponent,
    TagsWithCheckboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
