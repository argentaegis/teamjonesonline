import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormArray} from "@angular/forms";

const languages = require('../languages.json');

@Component({
  selector: 'app-select-languages-component',
  templateUrl: './select-languages-component.component.html',
  styleUrls: ['./select-languages-component.component.css']
})
export class SelectLanguagesComponentComponent implements OnInit {

  @Input('parentForm')
  public parentForm: FormGroup;
  myLanguages: any;
  selectLanguagesForm: FormGroup;
  nativeLanguageSelect: Language;
  foreignLanguageSelect: Language;

  constructor(
    private fb: FormBuilder
  ) {
    this.myLanguages = languages;
    this.createForm();


  }

  createForm() {
    this.selectLanguagesForm = this.fb.group({
      nativeLanguageSelect: new FormControl(this.nativeLanguageSelect),
      foreignLanguageSelect: new FormControl(this.foreignLanguageSelect)
    });

    var english = this.myLanguages.languages.filter(function( obj ) {
      return obj.code == 'en';
    })[0];

    var french = this.myLanguages.languages.filter(function( obj ) {
      return obj.code == 'fr';
    })[0];

    this.selectLanguagesForm.controls['nativeLanguageSelect'].setValue(english);
    this.selectLanguagesForm.controls['foreignLanguageSelect'].setValue(french);


    console.log('SelectLanguagesComponentComponent.component');
    console.log(this.selectLanguagesForm.value);
  }

  ngOnInit() {

    this.parentForm.addControl('selectLanguagesForm', this.selectLanguagesForm);
  }

}

export interface Language {
  code: String;
  name: String;
  nativeName: String;
  icon: String;
}
