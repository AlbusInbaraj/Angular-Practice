import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day01CounterAppComponent } from './day01-counter-app.component';

describe('Day01CounterAppComponent', () => {
  let component: Day01CounterAppComponent;
  let fixture: ComponentFixture<Day01CounterAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day01CounterAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day01CounterAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
