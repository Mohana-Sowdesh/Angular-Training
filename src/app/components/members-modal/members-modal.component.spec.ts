import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersModalComponent } from './members-modal.component';

describe('MembersModalComponent', () => {
  let component: MembersModalComponent;
  let fixture: ComponentFixture<MembersModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembersModalComponent]
    });
    fixture = TestBed.createComponent(MembersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
