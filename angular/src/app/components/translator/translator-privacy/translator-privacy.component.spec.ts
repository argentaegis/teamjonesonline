import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatorPrivacyComponent } from './translator-privacy.component';

describe('TranslatorPrivacyComponent', () => {
  let component: TranslatorPrivacyComponent;
  let fixture: ComponentFixture<TranslatorPrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslatorPrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatorPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
