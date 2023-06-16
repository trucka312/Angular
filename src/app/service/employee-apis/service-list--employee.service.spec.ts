import { TestBed } from '@angular/core/testing';

import { ServiceListEmployeeService } from './service-list--employee.service';

describe('ServiceListEmployeeService', () => {
  let service: ServiceListEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceListEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
