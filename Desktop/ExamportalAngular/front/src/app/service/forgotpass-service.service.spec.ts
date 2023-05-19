import { TestBed } from '@angular/core/testing';

import { ForgotpassServiceService } from './forgotpass-service.service';

describe('ForgotpassServiceService', () => {
  let service: ForgotpassServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgotpassServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
