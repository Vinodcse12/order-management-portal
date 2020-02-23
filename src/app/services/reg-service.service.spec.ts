import { TestBed, inject } from '@angular/core/testing';

import { RegServiceService } from './reg-service.service';

describe('RegServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegServiceService]
    });
  });

  it('should be created', inject([RegServiceService], (service: RegServiceService) => {
    expect(service).toBeTruthy();
  }));
});
