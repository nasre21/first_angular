import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { permessionsGuard } from './permessions.guard';

describe('permessionsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => permessionsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
