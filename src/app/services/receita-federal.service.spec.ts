import { TestBed } from '@angular/core/testing';

import { ReceitaFederalService } from './receita-federal.service';

describe('ReceitaFederalService', () => {
  let service: ReceitaFederalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceitaFederalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
