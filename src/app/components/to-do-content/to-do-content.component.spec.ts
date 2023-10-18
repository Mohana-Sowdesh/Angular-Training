import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoContentComponent } from './to-do-content.component';

describe('ToDoContentComponent', () => {
  let component: ToDoContentComponent;
  let fixture: ComponentFixture<ToDoContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoContentComponent]
    });
    fixture = TestBed.createComponent(ToDoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
