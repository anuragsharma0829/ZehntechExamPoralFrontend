import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuizQuestonsComponent } from './view-quiz-questons.component';

describe('ViewQuizQuestonsComponent', () => {
  let component: ViewQuizQuestonsComponent;
  let fixture: ComponentFixture<ViewQuizQuestonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewQuizQuestonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewQuizQuestonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
