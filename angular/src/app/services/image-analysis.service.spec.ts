import { TestBed, inject } from '@angular/core/testing';

import { ImageAnalysisService } from './image-analysis.service';

describe('ImageAnalysisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageAnalysisService]
    });
  });

  it('should be created', inject([ImageAnalysisService], (service: ImageAnalysisService) => {
    expect(service).toBeTruthy();
  }));
});
