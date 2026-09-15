import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day02ProfileEditorComponent } from './day02-profile-editor.component';

describe('Day02ProfileEditorComponent', () => {
  let component: Day02ProfileEditorComponent;
  let fixture: ComponentFixture<Day02ProfileEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day02ProfileEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day02ProfileEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
