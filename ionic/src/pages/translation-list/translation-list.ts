import {Component,  ViewChild, ElementRef, OnInit, AfterViewChecked} from '@angular/core';
import {CurrentDataService} from "../../services/current-data.service";
import {ScreenOrientation} from "@ionic-native/screen-orientation";


/**
 * Generated class for the TranslationListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'translation-list',
  templateUrl: 'translation-list.html'
})
export class TranslationListComponent implements AfterViewChecked{

  @ViewChild('scrollWrapper') private myScrollContainer: ElementRef;

  constructor(
    public currentDataService: CurrentDataService,
    private screenOrientation: ScreenOrientation
  ) {
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    console.log('scrollToBottom');
    try {
      console.log('Pre: ' + this.myScrollContainer.nativeElement.scrollTop);
      console.log('Pre: ' + this.myScrollContainer.nativeElement.scrollHeight);
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      console.log('POST: ' + this.myScrollContainer.nativeElement.scrollTop);
    } catch(err) {
      console.log('ERR');
      console.log(err);
    }
  }
}
