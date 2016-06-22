import {Component} from '@angular/core';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';

@Component({
  selector: 'tsw-footer',
  template: require('./footer.component.html'),
  styles: [
    require('./footer.component.css'),
    require('../toolbar.css')
  ],
  directives: [
    MD_TOOLBAR_DIRECTIVES
  ]
})
export class FooterComponent {
}
