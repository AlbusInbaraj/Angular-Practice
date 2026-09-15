import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day05CustomDirectiveComponent } from './day05-custom-directive.component';

describe('Day05CustomDirectiveComponent', () => {
  let component: Day05CustomDirectiveComponent;
  let fixture: ComponentFixture<Day05CustomDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day05CustomDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day05CustomDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
