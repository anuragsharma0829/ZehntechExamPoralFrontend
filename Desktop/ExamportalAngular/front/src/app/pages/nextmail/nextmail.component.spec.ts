import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextmailComponent } from './nextmail.component';

describe('NextmailComponent', () => {
  let component: NextmailComponent;
  let fixture: ComponentFixture<NextmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
