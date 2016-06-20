import {Component} from '@angular/core';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

@Component({
  selector: 'tsw-cta',
  template: require('./cta.component.html'),
  styles: [
    require('./cta.component.css'),
    require('../../button.css'),
    require('../../input.css')
  ],
  directives: [
    MD_BUTTON_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_CARD_DIRECTIVES
  ]
})
export class CtaComponent {
}
