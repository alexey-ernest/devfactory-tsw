import {Directive, OnInit, ElementRef, Input} from '@angular/core';

import '../../css/nivo-lightbox/nivo-lightbox.css';
import '../../css/nivo-lightbox/themes/default/default.css';
import '../../css/nivo-lightbox/themes/default/color_scheme_light.css';

@Directive({
  selector: '[lightbox]'
})
export class LightboxDirective implements OnInit {
  @Input()
  gallery: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    let $ = window['jQuery'];
    if (!$) {
      return;
    }

    let element = this.el.nativeElement;
    let gallery = this.gallery;
    $(document).ready(function() {
      let $element = $(element);
      if (!$element.nivoLightbox) {
        return;
      }

      // set lightbox options
      $element.attr('data-lightbox-type', 'inline');
      $element.attr('data-lightbox-gallery', gallery);

      $element.nivoLightbox({
        effect: 'slideDown'
      });
    });
  }
}
