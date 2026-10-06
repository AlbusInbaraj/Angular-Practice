import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { dirtyFormGuard } from './dirty-form.guard';

describe('dirtyFormGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => dirtyFormGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
