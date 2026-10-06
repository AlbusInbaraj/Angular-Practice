import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListHttpclientComponent } from './post-list-httpclient.component';
import { DataService } from '../../services/data/data.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('PostListHttpclientComponent', () => {
  let component: PostListHttpclientComponent;
  let fixture: ComponentFixture<PostListHttpclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostListHttpclientComponent],

      providers: [DataService, provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostListHttpclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
