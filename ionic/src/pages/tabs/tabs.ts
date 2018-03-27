import { Component } from '@angular/core';

import { TextPage } from '../text/text';
import { VoicePage } from '../voice/voice';
import { ImagePage } from '../image/image';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TextPage;
  tab2Root = VoicePage;
  tab3Root = ImagePage;

  constructor() {

  }
}
