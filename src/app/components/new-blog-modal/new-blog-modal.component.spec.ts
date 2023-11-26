import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBlogModalComponent } from './new-blog-modal.component';

describe('NewBlogModalComponent', () => {
  let component: NewBlogModalComponent;
  let fixture: ComponentFixture<NewBlogModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBlogModalComponent]
    });
    fixture = TestBed.createComponent(NewBlogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
