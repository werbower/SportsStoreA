/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductRepositoryService } from './ProductRepository.service';

describe('Service: ProductRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductRepositoryService]
    });
  });

  it('should ...', inject([ProductRepositoryService], (service: ProductRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
