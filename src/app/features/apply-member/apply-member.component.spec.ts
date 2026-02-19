import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyMemberComponent } from './apply-member.component';

describe('ApplyMemberComponent', () => {
  let component: ApplyMemberComponent;
  let fixture: ComponentFixture<ApplyMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyMemberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
