import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateImageComponent } from './translate-image.component';

describe('TranslateImageComponent', () => {
  let component: TranslateImageComponent;
  let fixture: ComponentFixture<TranslateImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslateImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
