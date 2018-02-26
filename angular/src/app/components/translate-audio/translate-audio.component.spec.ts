import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateAudioComponent } from './translate-audio.component';

describe('TranslateAudioComponent', () => {
  let component: TranslateAudioComponent;
  let fixture: ComponentFixture<TranslateAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslateAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
