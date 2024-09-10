import { TestBed } from '@angular/core/testing';

import { ServicePMService } from './service-pm.service';

describe('ServicePMService', () => {
  let service: ServicePMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
