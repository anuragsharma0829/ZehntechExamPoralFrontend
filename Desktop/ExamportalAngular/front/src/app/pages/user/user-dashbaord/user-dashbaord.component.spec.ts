import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashbaordComponent } from './user-dashbaord.component';

describe('UserDashbaordComponent', () => {
  let component: UserDashbaordComponent;
  let fixture: ComponentFixture<UserDashbaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashbaordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
