import { Component, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent {

  cardToShow: String;
  public translateForm: FormGroup;
  selectLanguagesForm: FormGroup;


  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
    this.cardToShow = 'translateText';
  }

  createForm() {
    this.translateForm = this.fb.group({
    });
  }

  showCard(cardName) {
    this.cardToShow = cardName;

    console.log('translate.component');
    console.log(this.translateForm.controls['selectLanguagesForm'].value);
  }
}
