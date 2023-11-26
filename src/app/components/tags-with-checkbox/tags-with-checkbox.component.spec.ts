import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsWithCheckboxComponent } from './tags-with-checkbox.component';

describe('TagsWithCheckboxComponent', () => {
  let component: TagsWithCheckboxComponent;
  let fixture: ComponentFixture<TagsWithCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagsWithCheckboxComponent]
    });
    fixture = TestBed.createComponent(TagsWithCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
