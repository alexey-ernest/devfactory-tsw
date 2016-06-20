import {Component} from '@angular/core';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';

@Component({
  selector: 'tsw-video',
  template: require('./video.component.html'),
  styles: [
    require('./video.component.css'),
    require('../button.css')
  ],
  providers: [MdIconRegistry],
  directives: [
    MD_ICON_DIRECTIVES,
    MD_BUTTON_DIRECTIVES
  ]
})
export class VideoComponent {
}
