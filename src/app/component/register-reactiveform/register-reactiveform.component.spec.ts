import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterReactiveformComponent } from './register-reactiveform.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

describe('RegisterReactiveformComponent', () => {
  let component: RegisterReactiveformComponent;
  let fixture: ComponentFixture<RegisterReactiveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterReactiveformComponent, CommonModule, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterReactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
