import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day08LoginTemplateDrivenFormComponent } from './day08-login-template-driven-form.component';

describe('Day08LoginTemplateDrivenFormComponent', () => {
  let component: Day08LoginTemplateDrivenFormComponent;
  let fixture: ComponentFixture<Day08LoginTemplateDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day08LoginTemplateDrivenFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day08LoginTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
