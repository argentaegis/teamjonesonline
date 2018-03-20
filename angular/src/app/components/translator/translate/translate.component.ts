import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {

  cardToShow: String;
  public translateForm: FormGroup;

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

  ngOnInit() {
    this.onChanges();
  }

  onChanges(): void {
    this.translateForm.valueChanges.subscribe(val => {
    });
  }

  showCard(cardName) {
    this.cardToShow = cardName;
  }

  isMobile() {
    return navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
      navigator.userAgent.match(/Opera Mini/i) ||
      navigator.userAgent.match(/IEMobile/i);
  };
}
