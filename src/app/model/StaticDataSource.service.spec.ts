/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StaticDataSourceService } from './StaticDataSource.service';

describe('Service: StaticDataSource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaticDataSourceService]
    });
  });

  it('should ...', inject([StaticDataSourceService], (service: StaticDataSourceService) => {
    expect(service).toBeTruthy();
  }));
});
