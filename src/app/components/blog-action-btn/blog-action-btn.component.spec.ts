import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogActionBtnComponent } from './blog-action-btn.component';

describe('BlogActionBtnComponent', () => {
  let component: BlogActionBtnComponent;
  let fixture: ComponentFixture<BlogActionBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogActionBtnComponent]
    });
    fixture = TestBed.createComponent(BlogActionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
