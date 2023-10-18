import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBoxComponent } from './left-box.component';

describe('LeftBoxComponent', () => {
  let component: LeftBoxComponent;
  let fixture: ComponentFixture<LeftBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftBoxComponent]
    });
    fixture = TestBed.createComponent(LeftBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
