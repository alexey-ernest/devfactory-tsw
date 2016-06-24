import {Directive, OnInit, ElementRef, Input} from '@angular/core';

import '../../css/nivo-lightbox/nivo-lightbox.css';
import '../../css/nivo-lightbox/themes/default/default.css';
import '../../css/nivo-lightbox/themes/default/color_scheme_light.css';

@Directive({
  selector: '[lightbox]'
})
export class LightboxDirective implements OnInit {
  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    let $ = window['jQuery'];
    if (!$) {
      return;
    }

    let element = this.el.nativeElement;
    $(document).ready(function() {
      let $element = $(element);
      if (!$element.nivoLightbox) {
        return;
      }

      $element.nivoLightbox({
        effect: 'slideDown'
      });
    });
  }
}
