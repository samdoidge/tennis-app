import { TestBed } from '@angular/core/testing';

import { MatchService } from './match.service';
import { HttpClientModule } from '@angular/common/http';

describe('MatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: MatchService = TestBed.get(MatchService);
    expect(service).toBeTruthy();
  });
});
