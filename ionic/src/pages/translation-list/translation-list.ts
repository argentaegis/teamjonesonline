import {Component,  ViewChild, ElementRef, OnInit} from '@angular/core';
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
export class TranslationListComponent implements OnInit{
  orientationClass: string = 'translationsRowPortrait';

  @ViewChild('scrollWrapper') private myScrollContainer: ElementRef;

  constructor(
    public currentDataService: CurrentDataService,
    private screenOrientation: ScreenOrientation
  ) {
    this.screenOrientation.onChange().subscribe(
      () => {
        this.scrollToBottom();
      },
      (err) => console.log(err)
    );
  }

  ngOnInit() {
    console.log('list init');
    this.scrollToBottom();

    this.currentDataService.translationData.subscribe({
      next: x => console.log('got value ' + x),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });

  }

  scrollToBottom(): void {
    console.log('scrollToBottom');
    try {
      console.log('Pre: ' + this.myScrollContainer.nativeElement.scrollTop);
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) {
      console.log('ERR');
      console.log(err);
    }
  }
}
