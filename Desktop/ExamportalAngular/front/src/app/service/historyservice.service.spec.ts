import { TestBed } from '@angular/core/testing';

import { HistoryserviceService } from './historyservice.service';

describe('HistoryserviceService', () => {
  let service: HistoryserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
