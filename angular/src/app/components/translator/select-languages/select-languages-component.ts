import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormArray} from '@angular/forms';
import {SelectedLanguagesService} from "../../../services/selected-languages/selected-languages.service";

@Component({
  selector: 'app-select-languages-component',
  templateUrl: './select-languages-component.html',
  styleUrls: ['./select-languages-component.css']
})
export class SelectLanguagesComponent implements OnInit {

  @Input('parentForm')
  public parentForm: FormGroup;
  myLanguages: any;
  selectLanguagesForm: FormGroup;
  leftLanguageSelect: FormControl;
  rightLanguageSelect: FormControl;
  
  constructor(
    private fb: FormBuilder,
    public selectedLanguageService: SelectedLanguagesService
  ) {
    this.myLanguages = this.selectedLanguageService.languagesSupported;
    this.createForm();
  }

  createForm() {
    this.selectLanguagesForm = this.fb.group({
      leftLanguageSelect: new FormControl(this.leftLanguageSelect),
      rightLanguageSelect: new FormControl(this.rightLanguageSelect)
    });

    this.initCurrentLanguagesValues();
  }

  ngOnInit() {
  }

  languageChanged(leftOrRight){
    if(leftOrRight === 'left')    {
      this.selectedLanguageService.setLanguageByCode(leftOrRight, this.selectLanguagesForm.controls['leftLanguageSelect'].value.code);
    }

    if(leftOrRight == 'right'){
      this.selectedLanguageService.setLanguageByCode(leftOrRight, this.selectLanguagesForm.controls['rightLanguageSelect'].value.code);
    }
  }

  initCurrentLanguagesValues() {
    this.selectedLanguageService.setStartingLanguage();

    this.selectLanguagesForm.controls['leftLanguageSelect'].setValue(this.selectedLanguageService.leftLang);
    this.selectLanguagesForm.controls['rightLanguageSelect'].setValue(this.selectedLanguageService.rightLang);
  }
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  icon: string;
}


