import { TestBed } from '@angular/core/testing';

import { CataasService } from './cataas.service';

describe('CataasService', () => {
  let service: CataasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CataasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
