import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsMenuComponent } from './blogs-menu.component';

describe('BlogsMenuComponent', () => {
  let component: BlogsMenuComponent;
  let fixture: ComponentFixture<BlogsMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogsMenuComponent]
    });
    fixture = TestBed.createComponent(BlogsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
