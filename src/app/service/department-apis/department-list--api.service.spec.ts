import { TestBed } from '@angular/core/testing';

import { DepartmentListApiService } from './department-list--api.service';

describe('DepartmentListApiService', () => {
  let service: DepartmentListApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentListApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
