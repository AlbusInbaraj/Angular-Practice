import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day06CustomPipeComponent } from './day06-custom-pipe.component';

describe('Day06CustomPipeComponent', () => {
  let component: Day06CustomPipeComponent;
  let fixture: ComponentFixture<Day06CustomPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day06CustomPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day06CustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
