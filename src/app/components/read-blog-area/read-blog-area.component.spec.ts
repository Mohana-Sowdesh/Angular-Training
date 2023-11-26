import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadBlogAreaComponent } from './read-blog-area.component';

describe('ReadBlogAreaComponent', () => {
  let component: ReadBlogAreaComponent;
  let fixture: ComponentFixture<ReadBlogAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadBlogAreaComponent]
    });
    fixture = TestBed.createComponent(ReadBlogAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
