import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormArray} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

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
    private fb: FormBuilder,
    private cookies: CookieService
  ) {
    this.myLanguages = languages;
    this.createForm();


  }

  createForm() {
    this.selectLanguagesForm = this.fb.group({
      nativeLanguageSelect: new FormControl(this.nativeLanguageSelect),
      foreignLanguageSelect: new FormControl(this.foreignLanguageSelect)
    });

    this.initCurrentLanguagesValues();

    console.log('SelectLanguagesComponentComponent.component');
    console.log(this.selectLanguagesForm.value);
  }

  ngOnInit() {



    this.parentForm.addControl('selectLanguagesForm', this.selectLanguagesForm);

  }

  languageChanged(type){
    console.log(type);
    if(type == 'native'){
      console.log('NATIVE');
      console.log(this.selectLanguagesForm.controls['nativeLanguageSelect'].value.code);
      this.cookies.set('translator_current_native',
        this.selectLanguagesForm.controls['nativeLanguageSelect'].value.code);
    } else if (type == 'foreign') {
      console.log('FOREIGN');
      this.cookies.set('translator_current_foreign',
        this.selectLanguagesForm.controls['foreignLanguageSelect'].value.code);
    }
  }

  getLanguageByCode(code){
    return this.myLanguages.languages.filter(function( obj ) {
      return obj.code == code;
    })[0];
  }

  initCurrentLanguagesValues() {
    var native = this.cookies.get('translator_current_native');
    var foreign = this.cookies.get('translator_current_foreign');

    console.log('cookies');
    console.log(native);
    console.log(foreign);

    var all = this.cookies.getAll();
    console.log(all);

    if(!native) {
      console.log('!NATIVE');
      native = 'en';
    }

    if(!foreign) {
      console.log('!FOREIGN');
      foreign = 'fr';
    }

    this.selectLanguagesForm.controls['nativeLanguageSelect'].setValue(this.getLanguageByCode(native));
    this.selectLanguagesForm.controls['foreignLanguageSelect'].setValue(this.getLanguageByCode(foreign));

  }
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  icon: string;
}


