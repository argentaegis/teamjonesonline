import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent {

  cardToShow: String;

  constructor(
) {
    this.cardToShow = 'translateText';
  }

  showCard(cardName) {
    console.log('showCard: ' + cardName);
    this.cardToShow = cardName;
  }

  showText(){
    var value = this.cardToShow === 'translateText'

    console.log('show val: ' + value);
    return value;
  }

  showImage(){
    var value = this.cardToShow === 'translateImage'

    console.log('show val: ' + value);
    return value;
  }
}
