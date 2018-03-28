import {Component,  ViewChild, ElementRef, OnInit} from '@angular/core';
import {CurrentDataService} from "../../services/currend-data.service";
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
export class TranslationListComponent implements OnInit{
  orientationClass: string = 'translationsRowPortrait';
  //@ViewChild('scrollWrapper') private myScrollContainer: Content;
  @ViewChild('scrollWrapper') private myScrollContainer: ElementRef;

  constructor(
    public currentDataService: CurrentDataService,
    private screenOrientation: ScreenOrientation
  ) {
    this.screenOrientation.onChange().subscribe(
      () => {
        console.log("List Orientation Changed...waiting")
        setTimeout(function () {
            console.log('done waiting');
            this.scrollToBottom();
          }.bind(this), 50);
      },
      (err) => console.log(err),
      () => {
        console.log('sO complete');
        this.scrollToBottom()
      }

    );
  }

  ngOnInit() {
    console.log('list init');
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    console.log('scrollToBottom');
    try {
      console.log('Pre: ' + this.myScrollContainer.nativeElement.scrollTop);
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      //this.myScrollContainer.scrollToBottom();
      console.log('Post: ' + this.myScrollContainer.nativeElement.scrollTop);
    } catch(err) {
      console.log('ERR');
      console.log(err);
    }
  }
}
