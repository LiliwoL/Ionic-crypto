import { TestBed } from '@angular/core/testing';

import { CoinlayerService } from './coinlayer.service';

describe('CoinlayerService', () => {
  let service: CoinlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
