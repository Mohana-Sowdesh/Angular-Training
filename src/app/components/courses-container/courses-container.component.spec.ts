import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesContainerComponent } from './courses-container.component';

describe('CoursesContainerComponent', () => {
  let component: CoursesContainerComponent;
  let fixture: ComponentFixture<CoursesContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesContainerComponent]
    });
    fixture = TestBed.createComponent(CoursesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
