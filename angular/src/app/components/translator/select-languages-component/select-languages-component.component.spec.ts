import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLanguagesComponentComponent } from './select-languages-component.component';

describe('SelectLanguagesComponentComponent', () => {
  let component: SelectLanguagesComponentComponent;
  let fixture: ComponentFixture<SelectLanguagesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectLanguagesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLanguagesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
