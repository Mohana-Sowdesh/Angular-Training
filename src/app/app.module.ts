import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BlogsMenuComponent } from './components/blogs-menu/blogs-menu.component';
import { ReadBlogAreaComponent } from './components/read-blog-area/read-blog-area.component';
import { LogoComponent } from './components/logo/logo.component';
import { TagsWithCheckboxComponent } from './components/tags-with-checkbox/tags-with-checkbox.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { MemberComponent } from './components/member/member.component';
import { MembersModalComponent } from './components/members-modal/members-modal.component';
import { NewBlogModalComponent } from './components/new-blog-modal/new-blog-modal.component';
import { BlogActionBtnComponent } from './components/blog-action-btn/blog-action-btn.component';
import { FormsModule } from '@angular/forms';
import { SalutationPipe } from './pipes/salutation.pipe';
import { HighlightBlogDirective } from './directives/highlight-blog.directive';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    BlogsMenuComponent,
    ReadBlogAreaComponent,
    LogoComponent,
    TagsWithCheckboxComponent,
    SearchBoxComponent,
    BlogPostComponent,
    MemberComponent,
    MembersModalComponent,
    NewBlogModalComponent,
    BlogActionBtnComponent,
    SalutationPipe,
    HighlightBlogDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
