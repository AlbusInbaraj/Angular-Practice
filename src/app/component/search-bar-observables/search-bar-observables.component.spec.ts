import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarObservablesComponent } from './search-bar-observables.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { DataService } from '../../services/data/data.service';

describe('SearchBarObservablesComponent', () => {
  let component: SearchBarObservablesComponent;
  let fixture: ComponentFixture<SearchBarObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarObservablesComponent],

      providers: [provideHttpClient(), provideHttpClientTesting() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
