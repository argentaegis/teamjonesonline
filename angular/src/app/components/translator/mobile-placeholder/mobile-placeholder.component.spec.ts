import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePlaceholderComponent } from './mobile-placeholder.component';

describe('MobilePlaceholderComponent', () => {
  let component: MobilePlaceholderComponent;
  let fixture: ComponentFixture<MobilePlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
