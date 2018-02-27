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
  nativeLanguageSelect: String;
  foreignLanguageSelect: String;

  constructor(
    private fb: FormBuilder
  ) {
    console.log(languages);
    this.myLanguages = languages;
    this.createForm();
  }

  createForm() {
    this.selectLanguagesForm = this.fb.group({
      nativeLanguageSelect: new FormControl(this.nativeLanguageSelect),
      foreignLanguageSelect: new FormControl(this.foreignLanguageSelect)
    });

    this.selectLanguagesForm.controls['nativeLanguageSelect'].setValue('en');
    this.selectLanguagesForm.controls['foreignLanguageSelect'].setValue('fr');

    console.log(this.selectLanguagesForm.value);
  }

  ngOnInit() {
    this.parentForm.addControl('selectLanguagesForm', this.selectLanguagesForm);
  }

}
