import { TestBed, inject } from '@angular/core/testing';

import { SelectedLanguagesService } from './selected-languages.service';

describe('SelectedLanguagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedLanguagesService]
    });
  });

  it('should be created', inject([SelectedLanguagesService], (service: SelectedLanguagesService) => {
    expect(service).toBeTruthy();
  }));
});
